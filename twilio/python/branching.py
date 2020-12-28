import sys

first_input = int(sys.argv[1])
second_input = int(sys.argv[2])

result = first_input + second_input
if result <= 0:
    print("You have chosen the path of destitution.")
elif result >= 1 and result < 101:
    print("You have chosen the path of plenty.")
elif result > 100:
    print("You have chosen the path of excess.")
