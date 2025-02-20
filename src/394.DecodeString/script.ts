function decodeString(s: string): string {
    const numChars = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    const isNum = (char: string) => numChars.has(char); 
    
    function unwrap(str: string, repeats: number): [string, number] {
        let res = "";
        let decodeNum = "";
        
        for (let i = 0; i < str.length; i++) {
            const char = str[i];

            if (isNum(char)) {
                decodeNum += char;
            } else if (char === "[") {
                const unwrapped = unwrap(str.slice(i + 1), Number(decodeNum));
                decodeNum = "";
                res += unwrapped[0];
                i += unwrapped[1];
            } else if (char === "]") {
                return [res.repeat(repeats), i + 1];
            } else {
                res += char;
            }
        }

        return [res.repeat(repeats), str.length];
    }

    return unwrap(s, 1)[0];
};

export { decodeString };

/*
"a2[b2[c]d]e"
i = 0 // "a <--

res = "a"
----------
"a2[b2[c]d]e"
i = 1 // "a2 <--

res = "a"
num = "2"
----------
"a2[b2[c]d]e"
i = 2 // "a2[ <--

res = "a"
num = 2
upwrapped = unwrap(s.slice(i + 1), num);
------ "b2[c]d]e"
------ i = 0 // "b <--
------ res = "b"
------ num = ""
------ outerNum = 2;
----------------------
------ "b2[c]d]e"
------ i = 1 // "b2 <--
------ res = "b"
------ num = "2"
------ outerNum = 2;
----------------------
------ "b2[c]d]e"
------ i = 2 // "b2[ <--
------ res = "b"
------ num = "2"
------ outerNum = 2;
------ upwrapped = unwrap(s.slice(i + 1), num);
------------------------------------------
-------------- "c]d]e"
-------------- i = 0 // "c <--
-------------- res = "c"
-------------- num = ""
-------------- outerNum = 2
------------------------------------------
-------------- "c]d]e"
-------------- i = 1 // "c] <--
-------------- res = "c"
-------------- num = ""
-------------- outerNum = 2
-------------- return [res.repeat(outerNum), i + 1] // ["cc", 2]
------ res += upwrapped[0]; // "cc"
------ i += upwrapped[1]; // 2
------ res = "bcc"
------ i = 4
------ num = ""
----------------------
------ "b2[c]d]e"
------ i = 5 // "b2[c]d <--
------ res = "bccd"
------ num = ""
------ outerNum = 2;
----------------------
------ "b2[c]d]e"
------ i = 6 // "b2[c]d] <--
------ res = "bccd"
------ num = ""
------ outerNum = 2;
------ return [res.repeat(outerNum), i + 1] // ["bccdbccd", 7]
res += upwrapped[0] // "bccdbccd"
i += upwrapped[1] // 7
res = "abccdbccd"
i = 9
num = ""
----------
"a2[b2[c]d]e"
i = 10 // "a2[b2[c]d]e <--
res = "abccdbccde"
num = ""
----------
return "abccdbccde"
*/