from django import template

register = template.Library()

@register.filter
def mul(value, arg):
    return value * arg

@register.filter
def grouper(iterable, n, fillvalue=None):
    args = [iter(iterable)*n]
    return zip(*args, fillvalue=fillvalue)

@register.filter
def sum_digits(value):
    sum = 0
    for digit in str(value):
        sum += int(digit)
    return sum

@register.filter
def times(number):
    return range(1, number+1)

@register.filter
def convert_int(str):
    return int(str)

@register.filter
def div(value, arg):
    try:
        return int(int(value)/int(arg, 0))
    except(ValueError, ZeroDivisionError):
        return None

@register.filter
def index (value, arg):
    return value[arg]