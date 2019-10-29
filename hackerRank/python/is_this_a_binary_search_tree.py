# For the purposes of this challenge, we define a binary search tree to be a binary tree with the following properties:

#     The data value of every node in a node's left subtree is less than the data value of that node.
# The data value of every node in a node's right subtree is greater than the data value of that node.
# The data value of every node is distinct.

# For example, the image on the left below is a valid BST. The one on the right fails on several counts:
# - All of the numbers on the right branch from the root are not larger than the root.
# - All of the numbers on the right branch from node 5 are not larger than 5.
# - All of the numbers on the left branch from node 5 are not smaller than 5.
# - The data value 1 is repeated.


""" Node is defined as
class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
"""
# one func to check all child nodes recursively for being (> or <) a specific ancestor node
# another to run above code on each node in the tree
# another to house all of this and give answer for if it is all in order
# **WARNING** If tree is too large, this will create a stack overflow.  Small size trees only.

nodeBalanced = True


def valCheck(node):
    if(node):
        return node.data
    else:
        return None


def checkRootRight(node, rootValue):
    global nodeBalanced
    if(node.data <= rootValue):
        nodeBalanced = False
    if(node.right != None):
        checkRootRight(node.right, rootValue)
    if(node.left != None):
        checkRootRight(node.left, rootValue)


def checkRootLeft(node, rootValue):
    global nodeBalanced
    if(node.data >= rootValue):
        nodeBalanced = False
    if(node.right != None):
        checkRootLeft(node.right, rootValue)
    if(node.left != None):
        checkRootLeft(node.left, rootValue)


def nodeCheckTracker(node):
    if(node.left != None):
        checkRootLeft(node.left, node.data)
        nodeCheckTracker(node.left)
    if(node.right != None):
        checkRootRight(node.right, node.data)
        nodeCheckTracker(node.right)


def checkBST(root):
    global nodeBalanced
    nodeBalanced = True
    nodeCheckTracker(root)
    return nodeBalanced
