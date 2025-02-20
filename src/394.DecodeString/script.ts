function decodeString(s: string): string {
    const numChars = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    const isNum = (char: string) => numChars.has(char); 

    const _decode = (str: string, repeats: number): { str: string, shift: number } => {
        let res = "";
        let decodeNumAsStr = "";
        
        for (let i = 0; i < str.length; i++) {
            const char = str[i];

            if (isNum(char)) {
                decodeNumAsStr += char;
            } else if (char === "[") {
                const decoded = _decode(str.slice(i + 1), Math.max(1, Number(decodeNumAsStr))); // in case of decodeNumAsStr === "" need to repeat 1 time not 0
                res += decoded.str;
                i += decoded.shift;
                decodeNumAsStr = "";
            } else if (char === "]") {
                return { 
                    str: res.repeat(repeats), 
                    shift: i + 1 
                };
            } else {
                res += char;
            }
        }

        return {
            str: res.repeat(repeats),   
            shift: str.length
        };
    }

    return _decode(s, 1).str;
};

export { decodeString };

/*
Test recurion thoughts

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