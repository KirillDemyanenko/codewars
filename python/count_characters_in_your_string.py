# Task - https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/python

def count(s):
    obj = {}
    for letter in s:
        if obj.get(letter):
            obj[letter] += 1
        else:
            obj[letter] = 1
    return obj


print(count('aba'))