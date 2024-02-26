# Task - https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/python

def max_sequence(arr):
    if len(arr) == 0:
        return 0
    total, max_total = sum(arr), 0
    all_positive, all_negative = True, True
    for el in arr:
        if el < 0:
            all_positive = False
        else:
            all_negative = False
    if all_positive:
        return total
    elif all_negative:
        return 0
    else:
        total = 0
        while True:
            if arr[0] > 0:
                break
            arr.pop(0)
        for el in arr:
            total = max(el, el + total)
            max_total = max(max_total, total)
        return max_total


print(max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
