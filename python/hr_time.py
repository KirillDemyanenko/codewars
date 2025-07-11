# https://www.codewars.com/kata/52685f7382004e774f0001f7/train/python

def make_readable(seconds):
    sec = seconds % 60 % 60
    seconds = (seconds - sec) // 60
    minutes = seconds % 60
    seconds = (seconds - minutes) // 60
    return f"{seconds:02d}:{minutes:02d}:{sec:02d}"


print(make_readable(0)) #, "00:00:00")
print(make_readable(59)) #, "00:00:59")
print(make_readable(60)) #, "00:01:00")
print(make_readable(3599)) #, "00:59:59")
print(make_readable(3600)) #, "01:00:00")
print(make_readable(86399)) #, "23:59:59")
print(make_readable(86400)) #, "24:00:00")
print(make_readable(359999)) #, "99:59:59")