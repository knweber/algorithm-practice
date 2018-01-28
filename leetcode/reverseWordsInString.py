class Solution(object):
    def reverseWords(self,str):
        strArr = str.split(" ")
        if len(strArr) <= 1:
            return str
        i = 0
        j = len(strArr) - 1
        while i < j:
            temp = strArr[i]
            strArr[i] = strArr[j]
            strArr[j] = temp
            i += 1
            j -= 1
        return ' '.join(strArr)

if __name__ == '__main__':
    print Solution().reverseWords("the sky is Blue")
