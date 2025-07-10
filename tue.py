import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime
import numpy as np

# Course catalogue
# (Name, Code, "DD Mon YYYY", Grade, Credits)
courses = [
    # Basic courses Y1
    ("USE basic: ethics and history of technology", "0SAB0", "30 Jun 2022", 8, 5),
    ("Data analytics for engineers",               "2IAB0", "15 Apr 2024", 6, 5),
    ("Calculus variant 2",                         "2WBB0", "24 Jan 2022", 6, 5),
    ("Industrial ecology to circular economy",     "0SV20", "14 Apr 2025", 8, 5),

    # Major Y1
    ("Computer systems",                           "2IC30", "05 Jul 2022", 6, 5),
    ("DBL Embedded Systems",                       "2IO75", "01 Jul 2022", 7, 5),
    ("Programming",                                "2IP90", "02 Nov 2021", 8, 5),
    ("Logic and set theory",                       "2IT60", "10 Nov 2022", 6, 5),
    ("Intro discrete structures",                  "2IT80", "20 Apr 2022", 6, 5),
    ("Data Structures",                            "2IL50", "16 Apr 2025", 6, 5),

    # Basic Y2
    ("Engineering design",                         "4WBB0", "07 Nov 2022", 7, 5),

    # Major Y2
    ("Automata, Language Theory & Complexity",     "2IT90", "07 Feb 2025", 6, 5),
    ("Datamodelling and databases",                "2ID50", "09 Apr 2024", 6, 5),
    ("Programming methods",                        "2IPC0", "10 Apr 2024", 6, 5),
    ("Software specification",                     "2IX20", "12 Apr 2023", 7, 5),
    ("Linear algebra & applications",              "2DBI00", "30 Jun 2023", 8, 5),

    # Major Y2 elective
    ("DBL App development",                        "2IS70", "23 Apr 2023", 9, 5),

    # Major Y3
    ("Probability and Statistics",                 "2DI90", "07 Nov 2024", 7, 5),
    ("Data mining & machine learning",             "2IIG0", "31 Jan 2024", 8, 5),
    ("Operating systems",                          "2INC0", "10 Apr 2025", 8, 5),
    ("Algorithms",                                 "2ILC0", "27 Jun 2025", 7, 5),

    # SEP
    ("Software Engineering Project",               "2IPE0", "04 Jul 2025", 8, 10),

    # Electives & trajectory
    ("Applied Logic",                              "2ITX0", "22 Apr 2022", 6, 5),
    ("Provable programming",                       "2ITB0", "12 Apr 2024", 6, 5),
    ("Data-intensive systems & apps",              "2ID70", "27 Jun 2024", 8, 5),
    ("Design for games & play II",                 "DZC20", "30 Jan 2025", 8, 5),
    ("Design < > research",                        "DDB100","31 Jan 2025", 7, 5),
    ("Entrepreneurship in action",                 "1ZK40", "27 Mar 2025", 7, 10),
    ("Creative programming",                       "DBB100","10 Apr 2025",10, 5),
    ("Lab on Offensive Computer Security",         "2IC80", "26 Jun 2025", 9, 5),
    ("Intercultural design",                       "DCB210","26 Jun 2025", 7, 5),
    ("ID Green – sustainability",                  "DDB180","26 Jun 2025", 7, 5),
    ("Designing business processes",               "1JZK40", "01 Jul 2025", 7, 5),
    ("Security",                                   "2IRR40","24 Jun 2025", 7, 5),
]

# Build DataFrame
df = pd.DataFrame(courses, columns=["Course", "Code", "Date", "Grade", "Credits"])
df["Date"] = pd.to_datetime(df["Date"], format="%d %b %Y")
df.sort_values("Date", inplace=True)

# Semester label helper (TU/e)
def academic_year(date):
    start = date.year if date.month >= 9 else date.year - 1
    return f"{start}/{(start + 1) % 100:02d}"

def semester_label(date):
    sem = 1 if date.month >= 9 or date.month <= 2 else 2   # S1: Sep–Feb
    return f"{academic_year(date)}-S{sem}"

df["Semester"] = df["Date"].apply(semester_label)

# Aggregate credits per semester
sem_agg = (
    df.groupby("Semester", sort=False)["Credits"]
      .sum()
      .reset_index()
)
sem_agg["Order"] = sem_agg["Semester"].apply(
    lambda s: int(s.split("/")[0]) * 2 + (1 if s.endswith("S1") else 2)
)
sem_agg.sort_values("Order", inplace=True)

# Bar chart with 30-ECTS reference line
plt.figure(figsize=(10, 6))
plt.bar(sem_agg["Semester"], sem_agg["Credits"], edgecolor="black")
plt.axhline(30, color="gray", linestyle="--", linewidth=1)   # target load
plt.text(
    sem_agg["Semester"].iloc[-7], 31,
    "Standard: 30 ECTS / semester", ha="right", va="bottom", fontsize=9, color="gray"
)

plt.title("ECTS Credits Earned per Academic Semester")
plt.xlabel("Academic Semester")
plt.ylabel("Credits")
plt.xticks(rotation=45, ha="right")
plt.yticks(np.arange(0, sem_agg["Credits"].max() + 6, 5))
plt.grid(axis="y", linestyle="--", alpha=0.4)
plt.tight_layout()
plt.show()