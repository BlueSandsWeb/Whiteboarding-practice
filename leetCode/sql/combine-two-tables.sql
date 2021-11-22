# Description: https://leetcode.com/problems/combine-two-tables/
# Solution Runtime: 327 ms, faster than 77.53% of MySQL online submissions for Combine Two Tables.
# Solution Memory Usage: 0B, less than 100.00% of MySQL online submissions for Combine Two Tables.

SELECT firstName, lastName, city, state
FROM Person
LEFT JOIN Address USING (personId)