let adapters = `49
89
70
56
34
14
102
148
143
71
15
107
127
165
135
26
119
46
53
69
134
1
40
81
140
160
33
117
82
55
25
11
128
159
61
105
112
99
93
151
20
108
168
2
109
75
139
170
65
114
21
92
106
162
124
158
38
136
95
161
146
129
154
121
86
118
88
50
48
62
155
28
120
78
60
147
87
27
7
54
39
113
5
74
169
6
43
8
29
18
68
32
19
133
22
94
47
132
59
83
12
13
96
35`

adapters = adapters.split("\n").map(Number);
// Since the charging port is at 0 Volts --- starting val
adapters.unshift(0);
adapters = adapters.sort((a,b) => a - b);
// Device built in adapter is always 3 jolts higher than highest rated adapter ; hence add one more +3 jolt adapter
adapters.push(adapters[adapters.length - 1] + 3);

const oneDiff = adapters.filter((_,i,a) => a[i+1] - a[i] === 1).length;
const threeDiff = adapters.filter((_,i,a) => a[i+1] - a[i] === 3).length;

console.log(oneDiff * threeDiff);