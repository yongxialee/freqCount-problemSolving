// add whatever parameters you deem necessary

//since order is matter we traverse both strings from right to left 
//if we find the match, move ahead both strings
//otherwise move ahead only in string2

function isSubsequence(str1,str2,len1=str1.length,len2=str2.length) {
    //base case
    if(len1===0) return true
    if(len2===0) return false


    //normal case
    //if the char of two strings are match, move ahead both
    if(str1[len1-1]===str2[len2-1]) return isSubsequence(str1,str2,len1-1, len2-1)


    //if the last char of two strings not matching move ahead only string2
    return isSubsequence(str1,str2,len1,len2-1)

}




