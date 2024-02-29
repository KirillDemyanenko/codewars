# Task - https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/python

def two_sum(numbers, target):
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            if numbers[i] + numbers[j] == target:
                return i, j


print(two_sum([1, 2, 3], 4))
print(two_sum([3, 2, 4], 6))