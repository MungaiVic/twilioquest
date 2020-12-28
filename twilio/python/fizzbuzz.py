import sys

inputs = sys.argv
inputs.pop(0)

for item in inputs:
    if int(item) % 3 == 0:
        if int(item) % 5 == 0:
            print("fizzbuzz")
        else:
            print("fizz")
    elif int(item) % 5 == 0:
        print("buzz")
    else:
        print(item)
