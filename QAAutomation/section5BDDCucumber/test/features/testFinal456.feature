Feature: The sum of two numbers

    Scenario Outline: The num1 plus num2 will be the sum of both of them
        Then The result will be the sum of both of them <n1> and <n2> equal to <result>

    Examples:
        | n1| n2 | result |
        | 4 | 4  | 8      |
        | 5 | 3  | 8      |
        