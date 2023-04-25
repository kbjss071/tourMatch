from django import template

register = template.Library()

@register.filter
def mul(value, arg):
    return value * arg

@register.filter
def grouper(iterable, n, fillvalue=None):
    args = [iter(iterable)*n]
    return zip(*args, fillvalue=fillvalue)
