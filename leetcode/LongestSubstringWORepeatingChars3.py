def lengthOfLongest(s):
    usedChars = {}
    ans = 0
    start = 0
    for i, char in enumerate(s):
        if char in usedChars:
            ans = max(ans, i - start)
            start = max(start, usedChars[char] + 1)
        usedChars[char] = i
    return max(ans, len(s) - start)
