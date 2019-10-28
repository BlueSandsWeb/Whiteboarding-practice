# description: https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=trees&h_r=next-challenge&h_v=zen


class Node:
    def __init__(self, info):
        self.info = info
        self.left = None
        self.right = None
        self.level = None

    def __str__(self):
        return str(self.info)


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def create(self, val):
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root

            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break

# This solution assumes v1 and v2 are in the binary tree.  If there is a chance they are not, then this should be drastically different


def lca(root, v1, v2):
    lcaNode = root
    same = True
    while same:
        if(lcaNode.info == v1 or lcaNode.info == v2):
            same = False
            return lcaNode
        elif(lcaNode.info > v1 and lcaNode.info > v2):
            lcaNode = lcaNode.left
        elif(lcaNode.info < v1 and lcaNode.info < v2):
            lcaNode = lcaNode.right
        else:
            same = False

    return lcaNode


# Test 1
tree = BinarySearchTree()
arr = [4, 2, 3, 1, 7, 6]
t = 6
for i in range(t):
    tree.create(arr[i])
ans = lca(tree.root, 1, 7)
ans = tree.root
print(f"{ans.info} is {ans.info == 4}")

# # Test 2
# tree = BinarySearchTree()
# arr = [1, 2]
# t = 2
# for i in range(t):
#     tree.create(arr[i])
# ans = lca(tree.root, 1, 2)
# print(f"{ans.info} is {ans.info == 1}")

# # Test 3
# tree = BinarySearchTree()
# arr = [5, 3, 8, 2, 4, 6, 7]
# t = 7
# for i in range(t):
#     tree.create(arr[i])
# ans = lca(tree.root, 7, 3)
# print(f"{ans.info} is {ans.info == 5}")
