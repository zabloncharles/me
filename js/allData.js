// Get references to the button and the menu
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = dropdown.querySelector(".dropdown-content");
  let isOpen = false;

  // Add a click event listener to the dropdown
  dropdown.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    if (!isOpen) {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
    isOpen = !isOpen; // Toggle the isOpen flag
  });

  // Add a click event listener to the document to close the dropdown when clicking elsewhere
  document.addEventListener("click", function (event) {
    if (isOpen && event.target !== dropdown) {
      dropdownContent.style.display = "none";
      isOpen = false;
    }
  });
});

// ANIMATE ON NAP: 

var topicData = [
  {
    title: "WHAT IS AN AlGORITHM?",
    num: "0",
    desc: "In computer programming terms, an algorithm is a set of well-defined instructions to solve a particular problem. It takes a set of input(s) and produces the desired output.",
    image: "https://images.hdqwalls.com/wallpapers/boy-with-dog-o0.jpg",
    lesson:
      "An algorithm is a single, specific way of performing a complex task efficiently and repeatedly. The algorithm works by performing all of the smaller steps you need to do to perform the complex task, and is guaranteed to work (something that doesn't really work or only works sometimes would just be considered incomplete). To use a non-programming example, consider a manufacturing plant for a cookie company. The machines have pre-determined procedures for making chocolate chip cookies, oatmeal raisin abominations cookies, and sugar cookies. Now imagine that you're the guy whose job it is to switch the production lines to a new recipe whenever you change what kind of cookie you're making. It would be a huge pain if, every time you had to manually input the recipe, and give the machines instructions like measure 50kg of chocolate chips and move the flour bin at 0.1 m/s until it reaches the mixing bowl, and then rotate it at 0.25°/s until all of the flour is in the mixing bowl. It would take a ton of time, and even if you knew the recipes by heart it would still be way too easy to make a tiny mistake and cover the floor in raisins.Instead, the machine has preset routines. You push the sugar cookie button, and it follows the exact steps you gave it to make sugar cookies, every time. You don't have to worry about stupid mistakes, and it doesn't take you three hours to input the instructions.Algorithms are like those routines. Computer programs have thousands of tasks that are used over and over again. Things like sort this list of numbers, draw a triangle with these vertexes and this color,and save this file. People have worked out efficient, consistent ways of doing those tasks, and now everyone just uses those instead of doing it themselves every time. Some algorithms are designed for less common things, like finding special prime numbers: not things people do all the time, but things where coming up with a better way of doing them is still a big deal.In the end, algorithm is basically just a fancy term for method of doing something complicated/repetitive/irritating.', 'Things like 'sort this list of numbers",
  },
  {
    title: "Data Structure and Types",
    num: "1",
    desc: "Data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/002/099/721/small/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg",
    lesson:
      "In this article, you will learn about data structure and its types.What are Data Structures?.Data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.Depending on your requirement and project, it is important to choose the right data structure for your project. For example, if you want to store data sequentially in the memory, then you can go for the Array data structure.Note: Data structure and data types are slightly different. Data structure is the collection of data types arranged in a specific order. Basically, data structures are divided into two categories:Linear data structure and Non-linear data structure.Let's learn about each type in detail.In linear data structures, the elements are arranged in sequence one after the other. Since elements are arranged in particular order, they are easy to implement.However, when the complexity of the program increases, the linear data structures might not be the best choice because of operational complexities.",
  },
  {
    title: "Why learn DSA?",
    num: "2",
    desc: "In this article, we will learn why every programmer should learn data structures and algorithms with the help of examples.This article is for those who have just started learning algorithms and wondered how impactful it will be to boost their career/programming skills.",
    image: "",
    lesson:
      'What are data structures?.\n\nSimply put, data structures are ways in which we can organize information to make use of it for computation. Data structures and Algorithms are the core pillars of Computer Science. Almost all code consists of some sort of algorithms operating on one or more data structures. As a real-life example of a data structure, consider a dictionary. A dictionary is a book which associates words with definitions of those words, and is organized alphabetically. The way it is organized allows you to search for a particular word quickly, and access the definition for that word. In programming, we actually have a data structure called a dictionary, also known as an "associative array" or a "hash table", which does something similar. There are lots of other data structures such as linked lists, arrays, trees and so on which all have different strengths and weaknesses. As you learn more about programming you will become familiar with several of the most common data structures no doubt.\n\nIs it a piece of code? Is it particular to one language?\n\nA data structure is really a theoretical construct. In textbooks and computer science papers you can find lots of definitions of data structures which are completely abstracted away from any particular real-world programming language. In principle any data structure could be implemented in any programming language.\n\nHowever life is not all theory. In practical programming we need to use various data structures all the time. So every programming language include concrete implementations of different data structures, either as a built-in part of the language or with the standard libraries. All programming languages support some primitive data structures but which ones precisely and how they are implemented depends on the language.\n\nWho comes up with a better data structure?\n\nAlgorithms and data structures go hand-in-hand and both are very much still active areas of research. Computer science researchers are always trying to come up with better data structures that can solve various problems. There are many many specialized data structures that are relevant in different fields from databases to artificial intelligence to computer graphics, computational biology, etc. A lot of computer science papers are essentially like: "We identified a problem, so we created this new algorithm based on this new data structure that is some % faster than the previous best one, here are some benchmark results."\n\nCan all programmers write data structures?\n\nA programmer with a formal education in computer science will certainly know how to write their own implementations of all the classic data structures. However in the industry, programmers don\'t often have to resort to reinventing the wheel. For most problems you will encounter as you make your iPhone app or your web service or whatever you might be working on you will be able to use the very finely-tuned, efficient, thoroughly tested and debugged data structures provided with your language or there will be some library available that gives you what you need.\n\nWhat makes one better than another?\n\nSometimes two data structures can be used to solve the same problem, but one will be faster than the other at the cost of taking up more memory. Often times it there will be tradeoffs like that which a programmer has to weigh up against one another as they choose the best approach to the task. Every data structure supports a certain set of operations that allow you to read from / write to / change the structure. Each structure can do some operations faster than others, and which structure you choose usually has to do with what exactly you intend to use it for.\n\nWay out on the cutting edge you can find some data structures that are very specialized, intended to be used on exotic hardware or for special problems such as weather simulation on a supercomputer, or machine learning on a quantum computer, or for an MRI machine scanning the brain.',
  },
  {
    title: "Asymptotic Analysis: Big-O Notation and More",
    num: "3",
    desc: "The efficiency of an algorithm depends on the amount of time, storage and other resources required to execute the algorithm. The efficiency is measured with the help of asymptotic notations.",
    image:
      "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png",
    lesson:
      "In this tutorial, you will learn what asymptotic notations are. Also, you will learn about Big-O notation, Theta notation and Omega notation.\n\nThe efficiency of an algorithm depends on the amount of time, storage and other resources required to execute the algorithm. The efficiency is measured with the help of asymptotic notations.\n\nAn algorithm may not have the same performance for different types of inputs. With the increase in the input size, the performance will change.\n\nThe study of change in performance of the algorithm with the change in the order of the input size is defined as asymptotic analysis.\n\nAsymptotic notations are the mathematical notations used to describe the running time of an algorithm when the input tends towards a particular value or a limiting value.\n\nFor example: In bubble sort, when the input array is already sorted, the time taken by the algorithm is linear i.e. the best case.\n\nBut, when the input array is in reverse condition, the algorithm takes the maximum time (quadratic) to sort the elements i.e. the worst case.\n\nWhen the input array is neither sorted nor in reverse order, then it takes average time. These durations are denoted using asymptotic notations.\n\nThere are mainly three asymptotic notations:\n\nBig-O notation.\nOmega notation.\nand Theta notation.\nBig-O notation represents the upper bound of the running time of an algorithm. Thus, it gives the worst-case complexity of an algorithm. This is basically the worst time our algorythm can take to complete a simple task.\nBig-O gives the upper bound of a function.\nO(g(n)) = { f(n): there exist positive constants c and n0\n            such that 0 ≤ f(n) ≤ cg(n) for all n ≥ n0 }.\n            The above expression can be described as a function f(n) belongs to the set O(g(n)) if there exists a positive constant c such that it lies between 0 and cg(n), for sufficiently large n.\n            For any value of n, the running time of an algorithm does not cross the time provided by O(g(n)).\n\nSince it gives the worst-case running time of an algorithm, it is widely used to analyze an algorithm as we are always interested in the worst-case scenario.\nOmega notation represents the lower bound of the running time of an algorithm. Thus, it provides the best case complexity of an algorithm.\nOmega gives the lower bound of a function.\nΩ(g(n)) = { f(n): there exist positive constants c and n0 \n            such that 0 ≤ cg(n) ≤ f(n) for all n ≥ n0 }.\n            The above expression can be described as a function f(n) belongs to the set Ω(g(n)) if there exists a positive constant c such that it lies above cg(n), for sufficiently large n.\n\nFor any value of n, the minimum time required by the algorithm is given by Omega Ω(g(n)).\nTheta Notation (Θ-notation).\nTheta notation encloses the function from above and below. Since it represents the upper and the lower bound of the running time of an algorithm, it is used for analyzing the average-case complexity of an algorithm.\nFor a function g(n), Θ(g(n)) is given by the relation:\n\nΘ(g(n)) = { f(n): there exist positive constants c1, c2 and n0\n            such that 0 ≤ c1g(n) ≤ f(n) ≤ c2g(n) for all n ≥ n0 }.\nThe above expression can be described as a function f(n) belongs to the set Θ(g(n)) if there exist positive constants c1 and c2 such that it can be sandwiched between c1g(n) and c2g(n), for sufficiently large n.\n\nIf a function f(n) lies anywhere in between c1g(n) and c2g(n) for all n ≥ n0, then f(n) is said to be asymptotically tight bound.",
  },
  {
    title: "Master Theorem",
    num: "4",
    desc: "In this tutorial, you will learn what master theorem is and how it is used for solving recurrence relations.The master method is a formula for solving recurrence relations of the form:",
    image:
      "https://media.istockphoto.com/photos/mountain-landscapes-picture-id108125029?b=1&k=20&m=108125029&s=170667a&w=0&h=L5kspxyBuqkMPMq9NP-0g3iTj7sCWjSXikPe_Kc4Ne8=",
    lesson:
      "Master's Theorem is the best method to quickly find the algorithm's time complexity from its recurrence relation. This theorem can be applied to decreasing as well as dividing functions, each of which we'll be looking into detail ahead.The master theorem is used in calculating the time complexity of recurrence relations (divide and conquer algorithms) in a simple and quick way. If a ≥ 1 and b > 1 are constants and f(n) is an asymptotically positive function, then the time complexity of a recursive relation is given by T(n) = aT(n/b) + f(n)where, T(n) has the following asymptotic bounds:1. If f(n) = O(nlogb a-ϵ), then T(n) = Θ(nlogb a).2. If f(n) = Θ(nlogb a), then T(n) = Θ(nlogb a * log n).3. If f(n) = Ω(nlogb a+ϵ), then T(n) = Θ(f(n)).ϵ > 0 is a constant.Each of the above conditions can be interpreted as:If the cost of solving the sub-problems at each level increases by a certain factor, the value of f(n) will become polynomially smaller than nlogb a. Thus, the time complexity is oppressed by the cost of the last level ie. nlogb a.If the cost of solving the sub-problem at each level is nearly equal, then the value of f(n) will be nlogb a. Thus, the time complexity will be f(n) times the total number of levels ie. nlogb a * log n.If the cost of solving the subproblems at each level decreases by a certain factor, the value of f(n) will become polynomially larger than nlogb a. Thus, the time complexity is oppressed by the cost of f(n).Solved Example of Master Theorem.T(n) = 3T(n/2) + n2.Here,.a = 3.n/b = n/2.f(n) = n2.logb a = log2 3 ≈ 1.58 < 2. f(n) < nlogb a+ϵ , where, ϵ is a constant.Case 3 implies here.Thus, T(n) = f(n) = Θ(n2) .Master Theorem Limitations.The master theorem cannot be used if:T(n) is not monotone. eg. T(n) = sin nf(n) is not a polynomial. eg. f(n) = 2na is not a constant. eg. a = 2na < 1",
  },
  {
    title: "Divide and Conquer Algorithm",
    num: "5",
    desc: "The divide and conquer algorithm's operation will be explained in this lesson. To tackle a recursive problem, we will contrast the divide and conquer strategy with various methods.",
    image: "",
    lesson:
      "The divide and conquer approach divides a problem into smaller subproblems; these subproblems are further solved recursively. The result of each subproblem is not stored for future reference, whereas, in a dynamic approach, the result of each subproblem is stored for future reference.Use the divide and conquer approach when the same subproblem is not solved multiple times. Use the dynamic approach when the result of a subproblem is to be used multiple times in the future.Let us understand this with an example. Suppose we are trying to find the Fibonacci series. ",
  },
  {
    title: "Stack Data Structure",
    num: "6",
    desc: "You will learn about the stack data structure and how it is implemented in Python, Java, and C/C++ in this course.Stacks are linear data structures that adhere to the Last In First Out rule (LIFO). This implies that the last piece to be added to the stack gets eliminated first.",
    image: "",
    lesson:
      "In this tutorial, you will learn about the stack data structure and its implementation in Python, Java and C/C++.A stack is a linear data structure that follows the principle of Last In First Out (LIFO). This means the last element inserted inside the stack is removed first.You can think of the stack data structure as the pile of plates on top of another.Here, you can Put a new plate on top.Remove the top plate.And, if you want the plate at the bottom, you must first remove all the plates on top. This is exactly how the stack data structure works.In programming terms, putting an item on top of the stack is called push and removing an item is called pop.",
  },
  {
    title: "Queue Data Structure",
    num: "7",
    desc: "You will learn what a queue is in this tutorial. Additionally, queue implementations are available in Python, Java, C, and C++.In programming, a queue is a useful data structure. It is comparable to the line for tickets outside a movie theater, where the person who joins the line first receives the first ticket.",
    image: "",
    lesson:
      "A queue is a useful data structure in programming. It is similar to the ticket queue outside a cinema hall, where the first person entering the queue is the first person who gets the ticket.Queue follows the First In First Out (FIFO) rule - the item that goes in first is the item that comes out first.In programming terms, putting items in the queue is called enqueue, and removing items from the queue is called dequeue.\n\nWe can implement the queue in any programming language like C, C++, Java, Python or C#, but the specification is pretty much the same.\n\nBasic Operations of Queue\nA queue is an object (an abstract data structure - ADT) that allows the following operations:\n\nEnqueue: Add an element to the end of the queue\nDequeue: Remove an element from the front of the queue\nIsEmpty: Check if the queue is empty\nIsFull: Check if the queue is full\nPeek: Get the value of the front of the queue without removing it\nWorking of Queue\nQueue operations work as follows:\n\ntwo pointers FRONT and REAR\nFRONT track the first element of the queue\nREAR track the last element of the queue\ninitially, set value of FRONT and REAR to -1\nEnqueue Operation\ncheck if the queue is full\nfor the first element, set the value of FRONT to 0\nincrease the REAR index by 1\nadd the new element in the position pointed to by REAR\nDequeue Operation\ncheck if the queue is empty\nreturn the value pointed by FRONT\nincrease the FRONT index by 1\nfor the last element, reset the values of FRONT and REAR to -1",
  },
  {
    title: "Types of Queues",
    num: "8",
    desc: "This tutorial will teach you about different types of queues and illustrate them.In programming, a queue is a useful data structure. It's similar to the ticket line outside a movie theater, where the first person to enter the line gets the first ticket.",
    image: "",
    lesson:
      "In this tutorial, you will learn different types of queues with along with illustration.\n\nA queue is a useful data structure in programming. It is similar to the ticket queue outside a cinema hall, where the first person entering the queue is the first person who gets the ticket.\n\nThere are four different types of queues:\n\nSimple Queue\nCircular Queue\nPriority Queue\nDouble Ended Queue\nSimple Queue\nIn a simple queue, insertion takes place at the rear and removal occurs at the front. It strictly follows the FIFO (First in First out) rule.Circular Queue.\nIn a circular queue, the last element points to the first element making a circular link.\n\nCircular queue \nCircular Queue Representation\nThe main advantage of a circular queue over a simple queue is better memory utilization. If the last position is full and the first position is empty, we can insert an element in the first position. This action is not possible in a simple queue.Priority Queue.\nA priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority. If elements with the same priority occur, they are served according to their order in the queue.Deque (Double Ended Queue).\nIn a double ended queue, insertion and removal of elements can be performed from either from the front or rear. Thus, it does not follow the FIFO (First In First Out) rule.",
  },
  {
    title: "Circular Queue Data Structure",
    num: "9",
    desc: "This tutorial will teach you what a circular queue is. There are also circular queue implementations in C, C++, Java, and Python.",
    image: "",
    lesson:
      "A circular queue is the extended version of a regular queue where the last element is connected to the first element. Thus forming a circle-like structure.The circular queue solves the major limitation of the normal queue. In a normal queue, after a bit of insertion and deletion, there will be non-usable empty space. How does Circular Queue work?. Circular Queue works by the process of circular increment i.e. when we try to increment the pointer and we reach the end of the queue, we start from the beginning of the queue.",
  },
  {
    title: "Priority Queue",
    num: "10",
    desc: "This tutorial will teach you what a priority queue is. You will also learn about its Python, Java, C, and C++ implementations.A priority queue is a type of queue in which each element has a different priority value. Furthermore, elements are served in the order of their priority. That is, the elements with the highest priority are served first.",
    image: "",
  },
  {
    title: "Deque Data Structure",
    num: "11",
    desc: "This tutorial will teach you what a double ended queue (deque) is. There are also working examples of various operations on a deque in C, C++, Java, and Python.",
    image: "",
  },
  {
    title: "",
    num: "",
    desc: "",
    image: "",
  },
  {
    title: "",
    num: "",
    desc: "",
    image: "",
  },
  {
    title: "",
    num: "",
    desc: "",
    image: "",
  },
  {
    title: "",
    num: "",
    desc: "",
    image: "",
  },
];
