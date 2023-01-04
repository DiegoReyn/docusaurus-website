---
sidebar_label: 'Sets'
sidebar_position: 1
---

# Sets

```py title="Creating a set with pre-defined values"
myset = {"this", "is", "1", "set", True}
```

```py title="Creating a set with the set() constructor. (Note the use of a tuple)"
myset = set(("this", "is", "1", "set", True))
```

Sets are used to store multiple items in a single variable. (You can't have duplicates though!)

However, unlike lists, tuples, and dictionaries, sets are not ordered.

Additionally, the elements within a set cannot be modified! But, you can remove, edit, and re-add them.

# Add Elements

You can add elements to a set by using the following function:

```py 
myset.add("this")    #Throws an error if the input does not exist within the set
```

This function does not have a return value

# Delete Elements

You can take away elements from a set using any of the following functions:
```py 
myset.remove("this")    #Throws an error if the input does not exist within the set
myset.discard("this")   #Removes the element from the set IF it exists
```

Note: there is no return type from either of these functions.

# Check For an Element

You can check if a specific elements is in a set by using the "in" keyword as shown below:

```py 
if "this" in myset:
    print("Found this")
```