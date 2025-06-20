# 1. Backtracking

## What should the values be for a correct output?

## Result

## Mathematical Statement
That captures how the output of the given algorithm is defined in terms of its input parameters. 
(If someone calls it with a certain input, what do they observe as output? How does that output depend on the values of the parameters?)
(Note all combinations of input values make sense. It suffices if your statement covers all inputs that satisfy the following precondition...)

## Examples
### (2024 Resit)

### (2024)

### (2023 Resit)

### (2023)

### (2022)

(we skip 1 for now)


# 2. Greedy Choice Lemma

No proof, only a mathematical statement.  (Let ... Then there is an optimal ...)

## Examples
### Biathlon (2024 Resit)

A biathlon is organized during a partial lockdown.
- Each participant first swims **5 km** in a pool and then runs **10 km**.
- To avoid contamination **only one person may be in the pool at any moment**.
- Any number of participants may run simultaneously (they keep their distance).

Thus participants enter the pool one-at-a-time:
1. Person 1 swims.
2. As soon as person 1 leaves the pool to start running, person 2 starts swimming.
3. When person 2 leaves the pool, person 3 starts swimming, and so on.

There are **n** participants P1,…,P_n.  
For each P_i we know
- S_i: time needed for swimming
- R_i: time needed for running

The organisers want a **starting order** that **minimises the total duration of the event** (from the moment P_1 dives in until the last runner finishes).

Formulate a _greedy-choice lemma_ that lets you identify a participant P_i* such that **there exists an optimal schedule in which P_i* is the first to swim**.  
Give the lemma as a precise mathematical statement; no proof required.

#### answer
Let P_i be a participant whose running time is maximum, so that R_i* >= R_j for all j. Then there is an optimal schedule for the biathlon in which participant P_i* is the first to swim. 
(swimming time is irrelevant here, because it takes exactly sum of all swimming times before the last participant starts running, because they have to swim one after another. So we minimize the time from the last participants who starts running to the finish time of the race. So the last is the fastest.)

### Number Merging (2024)
You are given a list of n positive integers x1,…,xn (not necessarily distinct).  
A **merge** removes any two integers and replaces them by their sum.  
The cost of a merge equals the sum of the two values merged.  
After exactly n−1 merges only one integer remains; we seek a sequence of merges minimizing the total cost.

_Example (start list (7,8,9,10)(7,8,9,10))_
1. Merge 8,10 at cost 8+10=18 → (7,18,9)
2. Merge 7,18 at cost 7+18=25 → (25,9)
3. Merge 25,9 at cost 25+9=34 → (34)

Total cost 18+25+34=77.

A better sequence: merge 7,10→17; merge 8,9→17; merge 17,17→34.  
Total cost 17+17+34=68 (optimal for this input).

State a **greedy-choice lemma** for this problem: give a criterion to pick two numbers xi,xj such that some optimal merge sequence begins by merging them into xi+xj.  
(You need only state the lemma formally; no proof required.)

#### answer
Let xi,xj with i≠j be two integers in the list such that xi+xj is as small as possible. Then there is an optimal merge sequence that starts by merging xi and xj.

### Assigning oars to rowers (2023 Resit)

The student rowing team bought a new boat with variable-length oars and must decide how to allocate the oars among the n rowers R1,…,Rn.  
Each rower uses one oar in both hands, but not all oars are equally long and each rower has a preferred oar length:
- Rowers: R_i prefers an oar of p_i cm (1≤i≤n).
- Oars: the club owns n oars O1,…,On with lengths ℓ1,…,ℓn cm.

The goal is to assign every rower exactly one oar **minimizing the total cost**
cost=sum of from i to n of (p_i-g_i),
where g_i is the length of the oar given to R_i.

Example (3 rowers, 3 oars)

|Oar|Length|Rower|Preference|
|---|---|---|---|
|O1O_1|200200 cm|R1R_1|p1=210p_1=210 cm|
|O2O_2|210210 cm|R2R_2|p2=150p_2=150 cm|
|O3O_3|190190 cm|R3R_3|p3=180p_3=180 cm|

_Naïve assignment_ O1 ⁣→ ⁣R1,  O2 ⁣→ ⁣R2,  O3 ⁣→ ⁣R3
10+60+10=80.10 + 60 + 10 = 80.
_Better assignment_ O2 ⁣→ ⁣R1,  O3 ⁣→ ⁣R2,  O1 ⁣→ ⁣R3
0+40+20=60.0 + 40 + 20 = 60.

Formulate a **greedy-choice lemma** that can be used to compute an optimal assignment.  
Your lemma must specify an efficiently identifiable pair consisting of a rower R_i* and an oar O_j* such that **some** optimal assignment gives R_i* the oar O_j*.  

#### answer
Let R_i* be a rower that prefers the longest oars, so that p_i*=max(1<=i<=n) p_i. Let O_j* be an oar of maximum length, so that l_j*=max(from j=1 to n) l_j. Then there is an optimal assignment in which rower R_i* is assigned oar O_j*. 


### Minimum Maximum Lateness (2023)
Consider the following scheduling problem _Minimum Maximum Lateness_, in which each task has a deadline and the goal is to find a schedule in which the maximum violation of a deadline is as small as possible.

There are nn tasks X1,…Xn that have to be done. Each task X_i for 1≤i≤n takes t_i hours to complete. A schedule is determined by an ordering of the tasks. The first task in a schedule starts at time 0, and the other tasks start as soon as the preceding task is finished. Each task X_i has a deadline d_i, the time by which it is supposed to finish. If a task is completed on or before its deadline, its lateness L_i is 0. If it finishes later, at time C_i, then L_i=C_i-d_i. We want a schedule that minimizes the **maximum** lateness.

Formulate a greedy choice lemma that can be used to build an optimal schedule for the _Minimum Maximum Lateness_ problem. Your lemma should describe a criterion that efficiently identifies a task X_i* such that **there exists** an optimal schedule starting with X_i*. A proof is **not** required; a complete and correct mathematical statement suffices.

#### answer
Let X_i*  be an activity with the smallest deadline. Then there is an optimal scheduling in which X_i* is executed first. 

### (2022)
Norway is a beautiful country for hiking. In the winter time, all mountains are covered with ice which makes hiking impossible. But as spring arrives, the warmer weather causes the snow to melt, thereby making popular hiking destinations accessible. Due to height differences, not all destinations become snow-free at the same time. 

You are planning a vacation to Norway and are interested in making a schedule of which hikes to do. You will be on vacation for n days. There are m possible hiking destinations H1,..., Hm. Destination H (for 1≤ i≤ m) is accessible starting from day d onwards (1 ≤ di ≤ n) and stays accessible until the end of the vacation. For each hike H, the local tourist guide gives a rating r of how beautiful it is. 

Your goal is to make an itinerary for the vacation: a schedule that says which destination to hike to on each of the n days. You do not want to do the same hike twice, and you can only do hike Hi on day j if j ≥ di. The value of a schedule is given by the sum of the ratings of the hikes in the schedule. You may assume that there are sufficiently many hiking options that an optimal schedule consists of exactly one hike on each day; there are no days without hiking.

2 Formulate a gredy choice lemma that can be used to build an optimal hiking schedule. Your lemma should describe a criterion based on which you can efficiently choose a hike H with 1≤ i* < m and a day j* with 1 ≤ j* ≤n, such that there is an optimal hiking schedule in which hike H is done on day j*. You do not have to prove the lemma; it suffices to give a complete and correct mathematical statement of the lemma.

#### answer
Here are two correct answers. 
Alternative A. Out of all hikes, let Hi be a hike with maximum rating, that is, a hike such that ri ri for all 1≤ i < m. Then there is an optimal schedule in which Hi is done on day di, that is, on the day it becomes available. 

Alternative B. Let H = {H;|d; = 1} be the set of hikes which are available at day 1. Let Hi be a hike in H whose rating is maximum, such that ri >ri whenever di == 1. Then there is an optimal schedule in which Hi is done on day 1.

# 3. Dynamic Programming
Give a recursive formula and explain it. You do not formally have to explain its correctness or running time, but it should be usable in dynamic programming algorithm in polynomial time. 
Pseudocode of algorithm. 

## Examples
### Activity Selection (2024 Resit)
We consider a variant of the Activity Selection problems where activities have profits associated to them.  
The input is a set **A = {a1, …, an}** of activities. Each activity has
- a start-time **s(a_i)**
- a finishing-time **f(a_i)**
- a profit **p(a_i)**.

No two activities have the same start- or the same finishing-time, and they are sorted on finishing time so that  
f(a1) < f(a2) < … < f(an).  
The goal in the **Max-Profit Activity Selection** problem is to select a subset **S** of non-overlapping activities such that the total profit Sum_{a_i in S} p(a_i) is maximised.

#### 3a Due to the profit values, a greedy choice does not lead to an optimal solution to this problem. 
Give and explain an explicit counter-example to show that the greedy choice “pick an activity that ends first” does **not** always lead to an optimal solution for the Max-Profit Activity Selection problem.
**Model answer**  
Consider two activities
- A1 has weight 1, starts at time 1 and ends at time 3.
- A2 has weight 2, starts at time 2 and ends at time 4.

The activity that ends first is A1. Since A1 overlaps A2, the only feasible solution containing A1 is {A1} with total weight 1.  
Doing only A2 is also feasible and yields weight 2, so the greedy strategy fails.


#### 3b Since the greedy strategy fails, we use dynamic programming based on the following sub-problem.
For **1 ≤ i ≤ n**, let **T[i]** be the maximum total profit of a non-overlapping subset of the first _i_ activities that **must include a_i**.  
Formally, T[i] = max over all sets **S ⊆ {a1, …, a_i}** with **a_i ∈ S** and **S** non-overlapping of Sum_{a_j in S} p(a_j).
Give a recursive formula for T[i] and explain it.
_Hint:_ For an activity a_i, define
  endsBefore(a_i) = { a_j in A | f(a_j) < s(a_i) }
(those activities that finish before a_i starts). Because the list is sorted, endsBefore(a_i) is contained in {a1, …, a_{i-1}} and may be empty (e.g. when i = 1).

**Model answer**
If endsBefore(a_i) = ∅, then T[i] = p(a_i).
If endsBefore(a_i) ≠ ∅, then T[i] = p(a_i) + max_{a_j in endsBefore(a_i)} T[j].

Explanation: the set counted by T[i] must contain a_i.  
• If nothing can precede a_i, the set is just {a_i}.  
• Otherwise we choose the best predecessor a_j and add its optimum value.

A one-line version (taking the maximum over an empty set as 0) is
  T[i] = p(a_i) + max_{a_j in endsBefore(a_i)} T[j].
 
Be careful: writing
  T[i] = max_{a_j in endsBefore(a_i)} ( p(a_i) + T[j] )
is wrong, because it gives 0 when endsBefore(a_i) is empty and thus omits the base case.

### (2024)
## Dynamic programming

This exercise is about recognizing a text from which the spaces and punctuation signs have been removed.  
The input consists of a string **X = x1, x2, …, xn** of _n_ characters _a–z_.  
There may be several ways to split this string into words.  
For example, the string **meetateight** can be split as **meet at eight**, or **meeta te ight**, or **me eta t eight**, or various other alternatives.  
Not all sequences of letters form valid words, and not all valid words are equally likely to have occurred in the original text.  
Therefore we have a function **score( … )** which takes as input a substring **xi … xj** of **X** (to be used as a potential word) and outputs a _non-negative integer_ that represents the score of that word.  
The goal is to split **X** into words so that the **sum of the scores** of the words is as large as possible.

Example: if **score(meet)=10**, **score(at)=3**, **score(eight)=2**, then the total score of the split **meet at eight** is **10 + 3 + 2 = 15**.

To solve the problem we use dynamic programming, based on the following sub-problem.

For **0 ≤ i ≤ n**, let **T[i]** be the maximum total score obtainable by splitting the prefix **x1 … xi** (the first _i_ characters of **X**) into words.

#### 3a Recursive formula for T[i]
Give a recursive formula for **T[i]** (for **0 ≤ i ≤ n**) and explain it.  
You may use **score(xℓ … xr)** to denote the score of the substring **xℓ … xr** of **X**.

**Model answer**
_Base case_ If **i = 0** then

```
T[0] = 0            // empty prefix → score 0
```
_Step case_ If **i > 0** then
```
T[i] = max_{1 ≤ j ≤ i}  ( T[j-1] + score(xj … xi) )
```

_Reasoning:_ When splitting the first _i_ characters we choose **every** possible last word **xj … xi** (for 1 ≤ j ≤ i).  
The total score is the score of that word, **score(xj … xi)**, plus the optimal score for the remaining prefix **x1 … x(j-1)**, which is **T[j-1]**.

(Note: An equivalent version is

```
T[i] = max_{0 ≤ j < i}  ( T[j] + score( x(j+1) … xi ) )
```

Observe the different index range.)

#### 3b Printing an optimal split

After **T[i]** has been computed for every **i**, the array **T[0 … n]** can be used to reconstruct an optimal split.  
Provide pseudocode for a _recursive_ procedure

```
PrintSolution( array X[1 … n], array T[0 … n], int i )
```

which prints a maximum-scoring sentence formed from the prefix **x1 … xi**.  
Assume the helper instruction `print(X, i, j)` prints the substring **xi … xj**.

_Hint:_ Insert **exactly one space** between printed words; no leading or trailing space; no punctuation or capitals required.

**Model answer**

```
PrintSolution( array X[1 … n], array T[0 … n], int i )

    if (i == 0)                     // nothing left to print
        return

    // find a j such that xj … xi is the last word in an optimal split
    for j = 1 to i do
        if ( T[j-1] + score(X, j, i) == T[i] ) then

            // first print the optimal split of the prefix before j-1
            if (j-1 > 0) {
                PrintSolution( X, T, j-1 )
                Print(' ')          // space before the last word
            }

            // now print the last word itself
            Print( X, j, i )
            return                 // done
```

(The loop finds the first index **j** that satisfies the equality; any such **j** gives an optimal split.)

### Organizing a full binary tree (2023 Resit)

Recall that a binary tree is **full** if every internal node has exactly two children.  
Given a sequence of _n_ integers **x₁, …, xₙ**, we say that a full binary tree **organizes** this sequence if its leaves are (from left to right) x₁, …, xₙ.

### Cost definition
- The cost of **any leaf** is 0.
- Let **v** be an internal node whose left-hand leaves are xₐ, …, xₖ (possibly a = k) and whose right-hand leaves are xₖ₊₁, …, x_b.
    - **Lᵥ = Σ_{i=a}^{k} xᵢ** (sum of the integers in the left subtree of v)
    - **Rᵥ = Σ_{i=k+1}^{b} xᵢ** (sum of the integers in the right subtree of v)
    - **cost(v) = (Lᵥ − Rᵥ)²** (the square of the difference between the two subtree sums)    

The **cost of the whole tree T** is the sum of _cost(v)_ over all internal nodes v of T.


For indices **1 ≤ a ≤ b ≤ n**, let

```
T[a,b] = minimum possible cost of a full binary tree that organizes xₐ, …, x_b.
```

#### 3 a
**Instance.** x₁ = 3, x₂ = 4, x₃ = 1, x₄ = 5, x₅ = 10. Consider the subsequence x₂, x₃, x₄ (i.e. 4, 1, 5).
Draw an optimal full binary tree that organizes x₂, x₃, x₄, and give the value T[2, 4].

**Model answer**

```
        (5-5)²
       /
  (4-1)²
   /   \
 x2=4  x3=1
          \
          x4=5
```

- Left subtree (4, 1) has internal-node cost (4 − 1)² = 3².
- Right subtree is just the single leaf 5, so cost 0.
- Root’s cost is (5 − 5)² = 0.

Total cost = 3² + 0² = **9**, so **T[2, 4] = 9**.

#### 3 b

Give a recursive formula for T[a,b] (1 ≤ a ≤ b ≤ n) and explain it briefly.

**Model answer (idea)**
- **Base case:** if **a = b** then T[a,b] = 0, because a single integer is represented by one leaf (cost 0).
- **Step case (a < b):** the optimal tree’s root splits the range xₐ, …, x_b into
    - a left subtree with xₐ, …, xₖ (for some a ≤ k < b) and
    - a right subtree with xₖ₊₁, …, x_b.
    
    The cost contributed by this root is
    
    ```
    (  sum_{i=a..k} x_i  –  sum_{i=k+1..b} x_i  )²
    ```
    
    The subtrees themselves must be optimal for their sub-ranges, so their costs are T[a,k] and T[k+1,b] respectively.
    

_Putting it together_:

```
For 1 ≤ a < b ≤ n:
    T[a,b] = min_{a ≤ k < b}  {  T[a,k] + T[k+1,b]
                               + ( (sum_{i=a..k}   x_i)
                                   - (sum_{i=k+1..b} x_i) )² }
```

(The three summands are: cost of the left subtree, cost of the right subtree, and cost of the current root.)

(Grading-scheme snippets (from the sheet)

- **+0.25 pt** Correct base case `if a = b then T[a,b] = 0`.
    
- **+0.25 pt** Taking _min_ over all split positions _k_ (a ≤ k < b).
    
- **+0.25 pt** Including the squared-difference term  
    `( (Σ_{i=a..k} x_i) - (Σ_{i=k+1..b} x_i) )²`.
    
- **+0.25 pt** Completely correct step case as written above._

### Dividing the loot (2023)


Three thieves robbed a jewellery store.  
They stole **n** items e₁,…,eₙ, where item eᵢ is worth **pᵢ** euros (1 ≤ i ≤ n).  
Each **pᵢ** is a positive integer not larger than **W**.

They want to know whether the **n** items can be split into **three disjoint sets whose total values are equal**.

_Example._  
For seven items with values **(1, 1, 3, 6, 9, 10)** a partition exists:  
{1, 3, 6}, {9, 1}, {10} each sum to 10.  
For values **(1, 1, 3, 6, 9, 11)** no such partition exists.

**Sub-problem definition**

For **0 ≤ i ≤ n** and **0 ≤ x, y, z ≤ n·W** let

```
T[i, x, y, z] = TRUE  if the first i items {e1,…,ei} can be divided into three sets
                      S1,S2,S3 with totals  x, y, z  respectively,
               FALSE otherwise.
```


#### 3 a – Using the table to answer the original question

Let **S = Σ_{i=1..n} pᵢ** be the total value of all items.
- If **S mod 3 ≠ 0** then an equal partition is **impossible**.
- Otherwise (S divisible by 3) an equal partition exists **iff**

```
T[n,  S/3,  S/3,  S/3]  is TRUE.
```

#### 3 b – Recurrence for T[i,x,y,z]

#### Correct formulation
_Base case_ (i = 0):

```
T[0, x, y, z] = TRUE  if x = y = z = 0
                 FALSE otherwise
```

_Step case_ (i ≥ 1):

```
T[i, x, y, z] =
      ( x ≥ p_i  ∧  T[i-1, x-p_i, y,     z     ] )
  ∨   ( y ≥ p_i  ∧  T[i-1, x,     y-p_i, z     ] )
  ∨   ( z ≥ p_i  ∧  T[i-1, x,     y,     z-p_i ] )
```

The three OR-terms correspond to giving item eᵢ to thief 1, thief 2, or thief 3 and updating the corresponding subtotal.

The recurrence accesses only valid sub-indices because we first test that the chosen subtotal (x, y or z) is at least pᵢ.

##### Common mistakes

**Mistake 1 – wrong base case**

Some students wrote:

```
if i = 0 then  T[0,x,y,z] = TRUE  when x = y = z,  FALSE otherwise
```

But with zero items the _only_ achievable totals are x = y = z = 0, so the correct base case must require all three totals to be zero.

---

**Mistake 2 – adding instead of subtracting pᵢ**

Incorrect form seen:

```
T[i,x,y,z] = T[i-1, x+p_i, y,     z    ] ∨ T[i-1, x, y+p_i, z    ] ∨ T[i-1, x, y, z+p_i]
```

Adding pᵢ to a subtotal lets the totals exceed the desired targets and leads to false positives.  
A concrete counter-example with five items each worth 1 shows the error: the faulty recurrence claims a 1-1-1 split exists for totals 2-1-1 when, in fact, it does not.


### String mixing (2022)
Given two strings X = x1,...,an and Y = У1,..., Yт, a mix of X and Y is a string Z of length n+ m which is formed by combining the characters of X and Y, without changing the relative order of characters which came from X and without changing the relative order of characters which came from Y. 
Here is an example, showing that the string cacarmdspus is a mix of 'cards' and 'campus'. 
X = cards 
Y = campus 
Z = car ds 
ca m pus 

Similarly, the string carcamdspus is a mix of 'cards' and 'campus'. The string 'ardsccampus' is not a mix of 'cards' and 'campus', because the relative order of the characters coming from 'cards' was changed when forming this string. The string 'campcar' is not a mix of 'cards' and 'campus', because in a mix all characters of both strings have to occur. 
In this exercise, we consider the following problem: given three strings X = x1,..., an, Y = y1,..., Ym, and Z = 21,..., Zn+m, we want to determine whether Z is a mix of X and Y. To solve this problem, we use dynamic programming. 

For each0<=i<=n, 0 ≤j≤m and 0≤k≤n +m, let T[i, j,k] be the Boolean value indicating whether the prefix Z = Z1,..., Zk is a mix of the prefixes Xi = x1,..., i and Yj = y1,..., уj. The subproblems we use for the dynamic program consist of computing the values of Ti, j, k]. 
So in other words, the subproblem asks whether the prefix consisting of the first k characters of Z is a mix of the length-i prefix of X and the length-j prefix of Y.
(As usual in the course, whenever the subscript is 0 we interpret the prefix as the empty string.)

Give a recursive formula for the values of T[i, j, k] for all 0 ≤ i ≤n, all 0 ≤ j≤ m, and all 0 ≤k≤ n + m. Explain your formula briefly to make it understandable; you do not formally have to prove its correctness. Your formula should be such that one can use it for a dynamic-programming algorithm for the string mixing problem that runs in polynomial time; however, you do not have to give the algorithm. Make sure that your recurrence covers all relevant cases. Hint. If your recurrence has multiple cases, it may be convenient to write each of them on a separate line.

Here is a correct recurrence, which follows the style of the recurrence for the Longest Common Subsequence problem.
T[i, j, k] = 
true                                          if i = j = k = 0
T[i-1, j, k -1]                             if (i, k > 0 Ax; = z) and (j = 0V yj Zk)
Ti, j-1, k - 1]                             if (j, k > 0^yj = zk) and (i = 0V xi zk)
Ti-1, j, k - 1] VT[i, j - 1, k - 1]    if (i, j, k > 0) \ x; = yj = Zk
false                                         otherwise

The main idea is as follows. If the three strings are all empty, then the answer is TRUE since you can trivially obtain the empty string by mixing the empty string with the empty string. Otherwise, there are two ways in which Zk can be a mix of X; and Y: • either the last character of Z came from X; and Zk-1 is a mix of Xi-1 and Yj, or •the last character of Zk came from Yj and Zk-1 is a mix of X; and Yj-1. Of course, for the last character to come from X; we require = 2, and similarly for Yj. 
We take the OR of the resulting options, and ensure that we do not access subproblems out of bounds (for negative indices).



# 4. Flow
Network G=(V,E) with source s and sink t. The capacity c(u,v) (and possibly flow f) of each edge (u,v) is indicated. Flows and capacities are indicated using the notation flow/capacity.

## Edmonds-Karp
Consider the iterations of the algorithm to find maximum flow in this network. Which augmenting flow would it use to augment the flow in the first iteration? Indicate critical edges. 

## not Edmonds-Karp
we instead select an augmenting path that has a maximum number of edges.

## Examples
### (2024 Resit)
Capacity of each edge is indicated. 
Consider what happens in the first iteration when running the Edmonds-Karp algorithm to find a maximum flow in this network. Which augmenting path would the algorithm use to augment the flow in the first iteration? List the edges that lie on the augmenting path. For each edge, indicate whether or not it is a critical edge. No further explanation is necessary.

#### answer
Since Edmonds-Karp uses a path with a minimum number of edges as an augmenting path, correct answers are simple ss-tt paths of minimum number of edges. The critical edges on the path are those whose capacity is equal to the smallest capacity on the path.
(and no reverse edges allowed)

### (2024)
Flows and capacities are indicated. 
Suppose that we do not use the Edmonds-Karp algorithm to compute a maximum flow, but we use a different criterion for selecting an augmenting path: we select an augmenting path that has a maximum number of critical edges. Which augmenting path would be used, when using this criterion? Give such a path and specify which edges on the path are critical.
#### answer
Recall that the definition of critical edge is _with respect to the path it lies on_. An edge e is critical on an augmenting path P if p has minimum residual capacity among all edges on P.
(bottleneck formed by the three critical edges)

### (2023 Resit)
Flows and capacities.
4a
Given an augmenting path P in the residual network G corresponding to the given flow f. List all edges on the augmenting path that are critical on P.

notes:
Recall that the residual capacity of an edge (x, y) is defined in one of three ways, depending on whether (x, y) is an edge of the original flow network, the reverse of an edge of the original network, or neither.
If (x, y) is an edge of the original network, then its residual capacity is just the amount of 'free' capacity, that is, c(x, y) - f(x, y). This means, for example, that the residual capacity of (h, f) (h->f 1/4) is equal to 4 - 1 = 3.
If (x, y) is the reverse of an edge (y, x) of the original network, then the residual capacity of (x, y) is equal to the amount of flow being sent in the other direction, since that is the amount that can be cancelled (which is equivalent to sending it in the other direction). This means, for example, that the residual capacity of (g, h) (g<-h 2/3) is equal to 2. 
Finally, if neither are edges of the original network, then the residual capacity is 0.

4b
The inflow of a vertex is defined as the total flow on the edges leading into the vertex. Consider the effect of augmenting flow f over the path P, resulting in a flow h. List all vertices for which the inflow becomes larger because of the augmentation. That is, list all vertices v for which sum of (u∈V) h(u,v)> sum of (u∈V) f(u,v).

Initial network (flow / capacity on every directed edge)

```
s → a   4 / 5          a → b   3 / 4          b → c   0 / 2
s → d   0 / 5          a → e   3 / 3          b → f   3 / 7
s → g   0 / 3

d → a   2 / 3          e → f   0 / 1          c → t   0 / 1
d → g   2 / 4          e → h   3 / 4          f → t   4 / 6

h → g   2 / 3          h → f   1 / 4          h → t   0 / 6
```

_All edges not listed have capacity 0 (i.e. they do not exist).  
The source is **s** and the sink is **t**._

Augmentation
Residual path used: **s → g ← h → f → t**  
(the step g ← h is the reverse direction of the edge h → g).
Augmenting by Δ = 2 modifies only these four edges:

|Edge|Old flow|New flow|
|---|---|---|
|s → g|0|**2**|
|h → g|2|**0**|
|h → f|1|**3**|
|f → t|4|**6**|

Effect on vertex inflows

|Vertex|Change in inflow|Reason|
|---|---|---|
|g|+2 (from s → g) − 2 (from h → g) = 0|cancels out|
|h|0|only its _out_-edges were changed|
|f|+2 (extra flow on h → f)|increases|
|t|+2 (extra flow on f → t)|increases|
|all other vertices|0|none of their incoming edges changed|

#### answer

```
The vertices whose inflow becomes larger are:

f,  t
```

(Every other vertex keeps exactly the same total inflow.)

### (2023)
Flows and capacities.
4a What's the value of the flow f drawn in the figure? 
answer: 4 because the flows to f are: c->f 2/4, f->t 3/3 and q<-t 1/3
4b Give a minimum-capacity cut (S, T) in the flow network, by giving the contents of the sets S and T.
answer: obtained by putting the vertices with **s ∈ S** and **t ∈ T**. but idk if that's always the case.

### (2022)
Flows and capacities are indicated.

What's the value of the given flow?
answer: edges going into sink t are: 2/10, 16/25, 2/15, 8/8 so the flow is 28.

The residual network Gf corresponding to the given flow f contains several augmenting paths. Give an augmenting path P whose residual capacity cf(P) is as large as possible. Give your answer by listing the successive vertices on the path, starting with s and ending in t, in lowercase without spaces or commas. 
In case there are several paths whose residual capacity is maximum, any single one of them is a valid answer.

An augmenting path of maximum residual capacity is given by? how do we determine it?
Look at the residual edges **leaving the source** s. Whichever path we choose, its bottleneck can never be larger than the largest of these three numbers, so we pick the biggest. (if like s->a 21/24, s->d 2/3, we go with sa. Therefore any augmenting path with residual capacity 3 is already optimal; none can be better)



# 5. Shortest-Path Algorithms
Take a classic shortest-path algorithm (Bellman-Ford, Dijkstra, Johnson). Tweak it or its weights. Now either prove it still works under the new objective, or craft a tiny counter-example.

The Big-C (a.k.a. “T+1”) Technique
Choose CCC larger than any possible original path weight so that the high-order term (num of edges, num of traffic-lights, etc.) dominates.

Edge-Ordering Effects in Bellman-Ford
Be able to design an ordering that propagates information “left-to-right” (fast) or stalls it (slow).  
_Recipe for a slow ordering:_ relax edges _backwards_ along the shortest path.

## Examples
we skip 5 for now

# 6. Flow Theory
maximum-flow / maximum-matching

Flow - matching reductions. Build and update a flow when the graph changes slightly.
Ford-Fulkerson and variants. 
Residual network invariants. 

## Examples
we skip 6 for now


# 7. NP-hard or polynomial time
**joined graphs and redundant edges**  
Multiple choice. 
For each of the following problems, state whether it is NP-hard or polynomial-time solvable. Justify your answer by briefly explaining which algorithmic technique can be used (if the problem is polynomial-time solvable) or how to reduce from an existing NP-hard problem (for NP-hard problems). Recall that the following problems are all NP-hard: _Circuit-SAT, Formula-SAT, 3-SAT, Maximum Clique, Minimum Vertex Cover, Maximum Independent Set, Hamiltonian Cycle, TSP, 3-Colorability, Subset Sum._
(we gotta have sth to say what all these are how to see if something can be reduced from them (maybe even for popular polynomial ones))

## Examples
#### Independent Set in Joined Graphs
Input: An undirected graph G = (V, E) together with a partition of V into sets L U R, such that for each vertex v∈L and u∈R we have (u, v)∈E. (In addition, there may be edges between pairs of vertices within L, and between pairs of vertices within R.)
Output: A maximum independent set in G, that is, a maximum-size vertex set S⊆V with the property that (u, v)∉E for all pairs of distinct vertices u, v∈S.

answer: NP-hard from Independent Set. 
This problem is NP-hard. Observe that the normal Maximum Independent Set problem is NP-hard, because S is a maximum clique in G if and only if S is a maximum independent set in the edge complement $\overline{G}$. From a normal input of Independent Set G = (V, E), we can make an input on a joined graph by adding a new vertex r with edges (r, v) for all v∈V. The new graph G' = (V U {r}, E') has a partition into L = V and R = {r} such that all pairs v∈L, u∈R are connected by an edge, so it is a valid input of Independent Set in Joined Graphs. If S is a maximum independent set in G' with |S| > 1 then S⊆V and it is a maximum independent set in G: we cannot have r in an independent set of size 2 since it has edges to all other vertices of the graph. If the maximum size independent set in G' is 1, then any arbitrary vertex of G forms a maximum independent set in G. Hence this gives a reduction from Independent Set to Independent Set on Joined Graphs.

#### Partition a Bipartite Graph into Cliques
Recall that a clique is a set of vertices such that every pair of distinct vertices in the set is connected by an edge.
Input: An undirected bipartite graph G = (V, E), so that the vertex set V can be partitioned into sets L and R and each edge of G has one endpoint in L and one endpoint in R.
Output: A partition of V into a minimum number of sets S1, ... , Sm such that S1 U S2 U . . . U Sm = V and each set S_i forms a clique in G.

answer: polynomial time from maximum matching problem on bipartite graphs. 
This can be solved in polynomial-time, since it is essentially the maximum matching problem on bipartite graphs. A clique in a bipartite graph has size at most 2, since there are no edges within the left side and no edges within the right side. So to partition V into cliques, we partition it into pairs which are connected by an edge, and singleton sets of size 1. To minimize the number of sets, the maximize the number of sets of size 2 which are used, which is equivalent to using a maximum matching which can be computed via Ford-Fulkerson.

#### Maximum Redundant Edges
Recall that an undirected graph is connected if it contains a path between any pair of vertices. 
Input: A connected undirected graph G = (V, E).
Output: A maximum-size subset S⊆E of edges for which G' = (V, E \ S) is still a connected graph.
the graph without disconnecting it.
Hence the question asks to find a maximum-size subset of the edges which can be removed from

answer: polynomial time from spanning tree (with BFS, DFS, Prim's, Kruskal's or shortest-path tree of a single-source shortest path computation)
This is polynomial-time solvable: compute a spanning tree T of the connected graph (for example by depth-first search, breadth-first search, Prim's or Kruskal's algorithm, or as the shortest-paths tree of a single-source shortest path computation) and output as S all edges not in T.
One way to see why this problem is easy to solve, is that the size of the optimal solution S is independent of the structure of the graph. As long as G still has a cycle, we can remove an edge from the cycle while keeping it connected. This process only stops once G is acyclic, at which point it is a connected acyclic graph (a tree) with |V| - 1 edges. So for any connected graph G = (V, E), the optimal solution to Maximum Redundant Edges will always remove | E| - (|V|- 1) edges, and we can find them greedily.


#### Deleting an Independent Set to get a Bipartite Graph
Recall that a set of vertices S⊆V is an independent set in a graph G = (V, E) if for all distinct u, v∉S we have (u, v) ¢ E.A graph G = (V, E) is bipartite if the vertex set V can be partitioned into disjoint sets L U R = V such that each edge of G has one endpoint in L and one endpoint in R.

Input: An undirected graph G = (V, E).
Output: A minimum-size vertex set S⊆V such that S is an independent set in G and the graph obtained by removing the vertices in
S and the edges attached to them, is bipartite. No, if this is impossible.

answer:
This problem is NP-hard by reduction from 3-Colorability: a graph G = (V, E) is 3-colorable if and only if you can remove an independent set (corresponding to the first color) from the graph to make it bipartite (where the bipartition gives the second and third color classes).
Hence G is 3-colorable if and only if Deleting an Independent Set to get a Bipartite Graph on G does not result in the answer No.


#### Largest Connected Subgraph
Input: An undirected graph G = (V, E).
Output: A maximum-size vertex set S⊆V such that for each pair of vertices u, v∈S there is a path  rom u to v in G.

answer:
This can be solved in polynomial-time: it suffices to compute the connected components of the graph (by breadth-first search or depth-first search), scanning the components to find one with a maximum number of vertices, and returning the set of vertices in a maximum-size component.

#### Coverage by Three Cycles
Input: An undirected graph G = (V, E).
Output: Three simple cycles C1, C2, C3 in G, such that each vertex v∈V lies on exactly one of the three cycles, or no if this is impossible.
answer:
This is NP-hard by reduction from Hamiltonian Cycle. If we had an algorithm to solve Coverage by Three Cycles in polynomial time, then we could solve Hamiltonian Cycle on a graph G = (V, E) in polynomial time by making a graph G' consisting of three separate copies of G and running the algorithm for Coverage by Three Cycles on it: graph G has a Hamiltonian Cycle if and only if G' can be covered by three cycles.

#### Monotone Circuit Satisfiability
Input: A Boolean circuit with n variables 1, ... , In using AND and OR gates (no NOT gates).
Output: Yes, if there is a truth assignment to x1, ... , In that makes the output gate TRUE. No, otherwise.

answer:
this is polynomial-time solvable. the answer is trivially YES for all inputs, since setting all
variables to TRUE will give a satisfying assignment since there are no NOT gates
in the circuit.

#### Graph Separation
Input: A directed graph G = (V, E) in which each edge e∈E has a non- negative integer weight w(e).
Output: A minimum-weight set of edges X⊆E with the property that in the graph G' = (V, E\X) that is obtained by removing the edges of X, there is a pair of distinct vertices u, v∈V such that there is no path from u to v in G'.

answer: this is polynomial-time solvable
you can solve this in polynomial time: for each pair of distinct vertices u, v, run a Max-Flow algorithm on the flow network obtained from G by using u as the source and v as the sink and the edge-weights as capacities. By the max-flow min-cut theorem, the value of the maximum flow is equal to the capacity of a minimum cut. Removing the edges going from the source-side to the sink-side of the cut breaks all paths from u to v, so that the smallest value of the max-flow obtained over all choices of u, v is the desired answer.

#### Subtree Weight Optimization
Recall that a rooted tree is a tree in which a distinguished vertex has been chosen as the root. Given a vertex v in a rooted tree, the subtree rooted at v is the tree T_v consisting of v together with all its descendants (its children, the children of its children, etc).

Input: A rooted tree T in which each vertex v has a non-negative integer weight w(v), along with a non-negative integer x. (So both internal nodes and leaves have a weight value.)
Output: A vertex v∈V such that the total weight of the vertices in the subtree of T rooted at v is as close to x as possible, i.e., the value |x - sum where u∈T_v of w(u)| is minimized over all possible choices of v E V.

answer: polynomial-time solvable
there are only n choices for v∈V, and that for each of them the total weight of the vertices in the subtree rooted at v can be computed in polynomial time. Hence we can compute a list of |V | candidate values in polynomial time and output vertex for which the corresponding value is as close to x as possible.

#### Divide into two cliques

Recall that a set of vertices S⊆V forms a clique in an undirected graph G = (V, E) if for each pair distinct vertices u, v∈S we have (u, v)∈E.
Input: An undirected graph G = (V, E).
Output: A partition of V into two sets V1, V2 such that V1 n V2 = 0 and V1 U V2 = V, with the property that V1 forms a clique in G and V2 forms a clique in G, or NO if such a partition does not exist.

answer: polynomial-time solvable
you can solve this by testing whether the complement-graph G is 2-colorable. (A 2-coloring is a partition of the vertex set into two independent sets, while a clique turns into an independent set when taking the complement graph.) A direct algorithm based on the idea that all non-neighbors of a vertex v should belong to the opposite set, can also be correct.

#### Formula equivalence
Input: Two Boolean formulas F1, F2 defined over the same set of variables I1, ... , In.
Output: Yes, if it holds that for any truth assignment to x1, ... , In, the two formulas F1 and F2 evaluate to the same value (both TRUE or both FALSE). No, if there exists a truth assignment for which one formula evaluates to TRUE and the other to FALSE.

answer: NP-hard
you can reduce Formula-SAT (or 3SAT) to this problem by using the formula you want to test for satisfiability as F1 and a trivially unsatisfiable formula as F2. This is based on the fact that formula F is satisfiable if and only if it is NOT equivalent to a formula that is always false, like x1 ∧ -X1. (This can even be scored when the constant 'FALSE' is used in the formula F2.)

#### Maximum-weight cycle breaker
Input: A connected undirected graph G = (V, E) with a positive integer weight w(e) for each e € E.
Output: A subset of edges X⊆E such that the graph G' = (V, E \ X) is a tree and the total Sum where e∈X of w(e) is as large as possible.

answer: polynomial-time solvable
you can solve this using a greedy strategy, or by an algorithm for minimum-weight spanning tree: if F⊆E is a minimum-weight spanning tree, then X = E \ F is a maximum-weight cycle breaker. (The remaining graph (V, E \ X) is a spanning tree of the graph and minimizing the weight of the left-over edges F is equivalent to maximizing the weight of the thrown-out edges X = E \ F.


#### Distributing cargo over planes 
Input: A list of n items x1,..., In, each with a weight w which is a non-negative integer. Additionally, a list of m cargo planes pi,..., pm, each with a lower-bound aj and upper-bound b; on the amount of weight which can be loaded onto plane pj. The values a; and bj for 1≤ j≤ m are non-negative integers. 
Output: An assignment of items to planes, such that each item is assigned to exactly one plane, and the total weight of the items assigned to plane pj is at least a; and at mostbj. If such an assignment does not exist, the output is no.

answer:
This is NP-hard, which can be proven by reduction from Subset Sum. Consider an instance of Subset Sum consisting of n non-negative integers 1,..., In and a target k, whose goal is to find a subset of the numbers with sum exactly k. We can reduce this problem to an instance of Distributing cargo over planes as follows: for each integer we create an item whose weight is equal to . We create m = 2 cargo planes: one with matching upper- and lower bounds a1 = b1=k, and the other one with a lower bound of 0 and an upper bound ofi. Then there is a solution to Subset Sum if and only if the corresponding cargo items can be distributed over the two planes, and the items corresponding to the contents of plane p1 correspond to a solution to Subset Sum.

#### Maximum-Size Meet-up
For a directed graph G = (V, E), we say that a vertex set U⊆V can meet in a single location if there existsavertex t E V that can be reached by each u∈U: for each u∈U, there is a path Pu,t from u to t in G. Note that the paths by which different vertices from U reach the vertex t are allowed to share vertices and edges. 

Input: A directed graph G = (V, E). 
Output: A maximum-size vertex set U⊆ V which can meet in a single location.

answer:
This is polynomial-time solvable. For any fixed vertex t∈V, the maximum vertex set U for which each u∈U can reach vertex t, is equal to the set of vertices which can be reached from t in the graph G' obtained by reversing the directions of all the edges. Hence this set can be computed in time O(n+ m) using DFS or BFS. By trying all options for t and remembering the best one, the problem can be solved in time O(n(n +m)).

#### Minimum Triangle Elimination 
Input: An undirected graph G= (V, E). 
Output: A minimum-size vertex set X⊆V such that the graph G obtained by removing the vertices from X and their incident edges, does not contain a cycle on 3 vertices (a triangle).

This problem is NP-hard, which can be proven by a reduction from **Minimum Vertex Cover**. Suppose G = (V, E) is a graph on which we want to find a minimum vertex cover. Construct the graph G' starting from a copy of G. For each edge e = (u, v) ∈ G, insert a new vertex ze into G' and add the edges (ze, u), (Ze, v). Hence for each edge e of G, there is a unique triangle in G' using the corresponding vertex ze. Then the minimum size of a vertex cover in G is equal to the minimum size of a vertex set X whose removal eliminates all triangles.



# 8. NP-hardness proof
Algorithm with input G=(V,E) and output X. There's a reduction from an NP-complete to the algorithm, given F and sth else and it shows how. You can test the satisfiability of F by solving the problem on G, because F is satisfiable if and only if G can be solved for. You are asked to investigate one direction of this equivalence.
Claim. If F has a satisfying assignment, then the vertices of G can solved for. 
Give a formal proof of the claim making use of steps in the construction of G, or give a counterexample.

Proof: 
We prove that if F is satisfiable, then G can be colored with n+1 colors. So assume F is satisfiable and let some assignment be satisfying. We define sth for the problem of G. 


## Examples
### graph coloring (2024 Resit)

The **Graph Coloring** problem is as follows.  
Input: an undirected graph G = (V,E).  
Output: a coloring of the vertices of G with as few colors as possible so that every edge joins vertices of different colors.

Richard Karp gave a reduction from **3-SAT** to **Graph Coloring**.  
Given a 3-CNF formula F with variables x1,…,xn and clauses C1,…,Cm (m ≥ 4), build a graph G = (V,E) like this:

1. **Variable vertices**  
    For each variable index 1 ≤ i ≤ n add three vertices  
    ti , fi , di (True, False, Dummy).
    
2. **Clause vertices**  
    For each clause index 1 ≤ j ≤ m add one vertex cj.
    
3. **Edges**  
    • For every variable 1 ≤ i ≤ n add the edge (ti , fi).  
    • For every pair of _different_ variables 1 ≤ i,ℓ ≤ n with i ≠ ℓ add the edges (di , dℓ), (di , tℓ), (di , fℓ).  
    (There is **no** edge between di and ti or fi.)  
    • For every clause index j and every variable index i, add an edge (cj , ti) **iff** the literal xi is _absent_ from clause Cj.  
    • For every clause index j and every variable index i, add an edge (cj , fi) **iff** the literal ¬xi is _absent_ from clause Cj.
    

This finishes the construction of G.

Karp’s reduction shows:  
F is satisfiable **iff** G can be colored with exactly n + 1 colors.  
We prove the forward direction.

claim:
If F has a satisfying assignment then G is (n + 1)-colorable.

proof:
Assume F is satisfiable. Let

 phi : {x1,…,xn} → {0,1}

be a satisfying assignment (1 means _true_, 0 means _false_).  
Define a coloring

 kappa : V → {1,…,n+1}

as follows.

_For every variable xi (1 ≤ i ≤ n)_  
 kappa(di) = i.  
 If phi(xi) = 0: kappa(ti) = n+1, kappa(fi) = i.  
 If phi(xi) = 1: kappa(ti) = i,  kappa(fi) = n+1.  
 Thus di gets its own color i; the literal that evaluates **true** gets color i; the literal that evaluates **false** gets color n+1.

_For every clause Cj (1 ≤ j ≤ m)_  
Let xi be the **first** variable in Cj (reading left-to-right) whose literal makes Cj true under phi.  
Set kappa(cj) = i. (So cj inherits the color of that first satisfying variable.)


checking every type of edge:

1. **Edges (ti , fi).**  
    One endpoint has color i, the other has color n+1 ⇒ different.
    
2. **Edges incident to di.**  
    • Edge (di , dℓ): colors i vs ℓ.  
    • Edge (di , tℓ) or (di , fℓ): colors i vs ℓ or n+1.  
    All different.
    
3. **Edges (cj , ti).**  
    These exist only when xi’s _positive_ literal is _not_ in Cj.  
    – If phi(xi)=0, kappa(ti)=n+1 vs kappa(cj)∈{1,…,n}.  
    – If phi(xi)=1, kappa(ti)=i, but because xi actually satisfies Cj, xi cannot be the _first_ satisfying literal missing from Cj; hence kappa(cj) ≠ i.  
    Endpoints differ.
    
4. **Edges (cj , fi).**  
    These exist only when ¬xi is _not_ in Cj.  
    – If phi(xi)=1, kappa(fi)=n+1 vs kappa(cj)∈{1,…,n}.  
    – If phi(xi)=0, kappa(fi)=i, but since ¬xi satisfies Cj, xi cannot be the first satisfying literal missing from Cj; so kappa(cj) ≠ i.  
    Endpoints differ.
    

All edges connect vertices of different colors, so kappa is a proper coloring with exactly n + 1 colors. Therefore G is (n + 1)-colorable, proving the claim.

_Note._ There are no edges between di and ti or fi of the same variable; di only connects to vertices of **other** variables.

### partition into cliques (2024)

Recall that a **clique** in an undirected graph G = (V,E) is a vertex set S ⊆ V such that for all distinct u,v ∈ S we have (u,v) ∈ E.  
Consider the following problem.


**Input:** An undirected graph G = (V,E).  
**Output:** A partition of V into a minimum number of disjoint sets S1,…,Sm such that  
S1 ∪ … ∪ Sm = V and each set Si forms a clique in G.

Tom suggests proving that **Partition into Cliques** is NP-hard using a reduction from the **Minimum Vertex Cover** problem, defined as follows.

Minimum Vertex Cover
**Input:** An undirected graph G = (V,E).  
**Output:** A minimum-size vertex set S ⊆ V such that for each edge (u,v) ∈ E we have u ∈ S or v ∈ S (or both).

Tom’s reduction is as follows.  
Given a graph G = (V,E) on which we want a minimum vertex cover, construct a graph G′ = (V′,E′):

- For each edge e ∈ E of G there is a corresponding vertex v_e in V′. Thus  
    V′ = { v_e | e ∈ E }.
    
- The edges of G′ are defined as follows: for two vertices v_e, v_f ∈ V′ that correspond to edges e, f ∈ E, place an edge (v_e, v_f) ∈ E′ **iff** the edges e and f of G share a common endpoint.
    

This completes the description of G′. Intuitively, each edge of G is represented by a vertex of G′, and two vertices of G′ are adjacent exactly when the edges of G they represent meet at a common endpoint.  
For example, if G contains edges e1 = (x,y), e2 = (x,z), e3 = (p,q) then in G′ there is an edge (v_e1, v_e2) because e1 and e2 share x, but v_e3 has no edge to v_e1 or v_e2.

Tom now claims that **the minimum size of a vertex cover of G equals the minimum number of cliques needed to partition G′**.  
You are asked to examine one direction of this equivalence:

> **Claim 1.**  
> If graph G = (V,E) is transformed into G′ = (V′,E′) by the reduction and the vertices of G′ can be partitioned into k cliques, then G has a vertex cover of size k.

Give a formal proof of the claim making use of the steps in the construction of G′, or give and explain an explicit counterexample to show that it is false.

answer:

The claim is **false**; here is a counterexample:

```
        e                 v_e
       / \               /   \
      /   \             /     \
     /     \           /       \
    /       \         /         \
   •---------•       •-----------•
    \   g   /         \         /
     \     /           \       /
      \   /             \     /
       \ /               \   /
        •                 v_g
        f                 /
```

On the left is a graph G = (V,E) with three vertices and three edges e, f, g (a triangle).  
On the right is the graph G′ produced by the reduction.  
The graph G′ can be covered by the single clique {v_e, v_f, v_g}, but G does **not** have a vertex cover of size 1, since choosing any single vertex leaves the edge between the other two vertices uncovered.

### Longest k-Wise Common Subsequence (2023 Resit)


We revisit the k-wise common subsequence problem introduced above.


_Input:_ A positive integer k, along with k sequences S[1], …, S[k] of integers.  
_Output:_ A maximum-length sequence S* such that S* is a subsequence of S[i] for every 1 ≤ i ≤ k.  
(The length of a sequence is the number of integers it contains, regardless of how many digits each integer has.)

To prove that this problem is NP-hard, Shaffi proposed a reduction from the **Maximum Independent Set** problem.  
Recall that an _independent set_ in an undirected graph G = (V,E) is a subset of vertices S ⊆ V such that (u,v) ∉ E for all distinct u,v ∈ S.

Shaffi’s reduction
Start with a graph G = (V,E) having n = |V| vertices and m = |E| edges; the goal is to find a maximum independent set.  
The reduction builds k = m + 1 sequences S[0], …, S[m], each drawing integers from {1, …, n}, as follows:
1. Number the vertices V from 1 to n, so V = {v1, …, vn}.
2. Let S[0] = (1, 2, …, n) — all integers from 1 to n in increasing order.
3. Number the edges E from 1 to m, so E = {e1, …, em}.
4. For each edge index j (1 ≤ j ≤ m), define S[j] like this.
    - Let va and vb be the endpoints of edge ej and order them so that a < b.
    - Then
        
        ```
        S[j] = (1, 2, …, a-1, a+1, …, n, 1, 2, …, b-1, b+1, …, n)
                 ↑ all integers except a       ↑ all integers except b
        ```
        
    - Equivalently: take two copies of S[0]; delete integer a from the first copy and integer b from the second copy, then concatenate the two copies.
        


Claim
If a graph G = (V,E) on m edges is transformed into k = m + 1 sequences S[0], …, S[m] as above, and these sequences possess a common subsequence containing r integers, then G has an independent set of size r consisting of those vertices.


Determine whether the claim is true or not.
If it is true, prove it formally. If it is false, give a counter-example.

Answer:
The claim is **true**.

Consider a sequence T* that is a common subsequence of all k sequences S[0], …, S[m].

- Since S[0] lists 1 … n in order (with no repeats), T* can contain each integer from this range at most once.
    
- Let
    
    ```
    T = { vj | integer j occurs in T* }
    ```
    
    Thus |T| = r, where r is the length of T*.  
    It remains to show that T is an independent set in G.
    

**proof that T is independent**

Assume, for contradiction, that T is **not** independent.  
Then there exist vertices va and vb in T with a < b such that (va,vb) ∈ E.  
Because every edge was numbered, there is some edge index j with ej = (va,vb).

Look at the sequence S[j] built for edge ej:

- The first half omits a but keeps b.
    
- The second half omits b but keeps a.
    

Consequently, (a,b) **is not** a subsequence of S[j] (only (b,a) can appear).

Yet a and b both occur in T*, and because S[0] is increasing, a precedes b in T*.  
Thus (a,b) is a subsequence of T*.

But T* must also be a subsequence of S[j] (it is common to all sequences), which is impossible because S[j] does not contain (a,b) in that order.  
This contradiction shows our assumption was wrong; therefore T is an independent set in G.

Since |T| = r, G indeed has an independent set of size r, proving the claim.

---

(Grading rubric (illustrative)

- Correctly states that the claim is true and provides a non-trivial justification.
    
- Explains how a common subsequence of length r yields a vertex set of size r and why no integer repeats.  
    _Feedback:_ “Your text suggests an independent set must contain only vertices of degree 0 or 1. That is not required.”
    
- Notes that for edge ej with endpoints va,vb (a < b), the pair (a,b) is _not_ a subsequence of S[j] (whereas (b,a) is).
    
- Combines these ideas into a coherent contradiction-style proof, free of major typos, showing that the extracted vertex set is independent.)

### (2023)


### NP-hardness of maximum-score  (2022)
2-coloring For a 2-coloring f: V→ {1, 2} of an undirected graph G = (V, E), the score is the number of edges whose endpoints receive different colors. Karen claims that the problem of computing a 2-coloring of maximum score is NP-hard. For this she presented areduction from the **Maximum Independent Set** problem. 
Recall that in an undirected graph G = (V, E), an independent set is a set of vertices SCV such that for all distinct u, v ∈ S we have (u, v) ∉E; there are no edges among the vertices in S. Finding a maximum independent set is NP-hard, since a set S of vertices is a maximum independent set precisely when VS is a minimum vertex cover. 
Karen claims that, using the following transformation, an algorithm for Maximum-score 2-coloring could be used to solve Maximum Independent Set. Starting from a graph G = (V, E) on which we want to compute a maximum independent set, her transformation constructsa graph G' = (V', E') as follows. 
1. For each vertex v ∈ V, add a corresponding vertex v' to V'. 
2. For each edge e = (u, v) ∈E, add two vertices ue and ve to V'and add the edges (u, Ue),(te,Ue), (U, Ve) to E. 
3. Finally, add a new vertex to V' and add edges to E' going from to all other vertices in V'. 
Intuitively, we can think of the transformation as (1) replacing each edge by a path of three edges, and (2) inserting a new vertex with edges to all other constructed vertices. 

Karen now claims the following: if the maximum size of an independent set in G is equal to k, then the maximum score of a 2-coloring of graph G' is equal to k +4 E. (Here E is the number of edges in G.) Karen's statement claims two quantities to be equal; you are asked to investigate one of the two inequalities which together result in Karen's equality. 

**Claim**. If Karen's reduction transforms graph G = (V, E) into G' = (V', E'), and a maximum independent set in G has size k, then G' has a 2-coloring whose score is at least k+4E.

Give a formal proof of the claim making use of the steps in the construction of G, or give and explain an explicit counterexample to show that it is false.


Model answer 
The claim is true; here is a proof. Suppose a maximum independent set in G has size k, and let S⊆V be independent set of size k. 

We construct a 2-coloring f: V' → {1,2} of G' as follows: 
1. Set f(x) = 1 for the special vertex æ added in Step (3). 
2. For each vertex v∈V, the color of the corresponding vertex v' in G is defined as follows: an 
	1. If v∈S, then define f(v') = 2, which causes the edge (x, v) to have endpoints of different colors. 
	2. lf v∉S, then define f(v') = 1. 
3. Finally, for each edge e = (u, v) ∈ E, which led to the creation of two vertices ue and ve in G', we define colors for ue and Ve. 
	1. If neither of u and u belongs to the independent set S, then define f(ue) = f(ve) = 2. This ensures that the four edges (u', ue), (v, ve), (ue,X), (ve,x) have endpoints of different colors since f(u') = f(v') = 1 = f(x) = 1. 
	2. Otherwise, since S is an independent set, exactly one of u and v belongs to S. 
		1. If u €S, then define f(ue) = 2 and f(ve) = 1, thereby ensuring that the edges (u',ue);(te,Ve), (ve,v) and the edge (ve, z) have endpoints of different colors. 
		2. If v € S, then define f(ue) = 1 and f(ve) = 2, thereby ensuring that the edges (v, Ve),(vesue), (uesu) and the edge (ue, ) have endpoints of different colors. 

The argumentation above shows that the constructed coloring f' has a score of at least k +4 E, since each vertex v E S contributes a unique edge whose endpoints have different colors, while each edge in G also contributes four unique edges whose endpoints have different colors. This completes the proof.

