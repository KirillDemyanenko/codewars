# Task - https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python

def open_or_senior(data):
    result = []
    for info in data:
        if info[0] >= 55 and info[1] > 7:
            result.append("Senior")
        else:
            result.append("Open")
    return result
