import p1 from "../assets/1.jpg";
import p2 from "../assets/2.jpg";
import p3 from "../assets/3.jpg";
import p4 from "../assets/4.jpg";
import p5 from "../assets/5.jpg";
import p6 from "../assets/6.jpg";
import p7 from "../assets/7.jpg";
import p8 from "../assets/8.jpg";
import p9 from "../assets/9.jpg";
import p10 from "../assets/10.jpg";
import p11 from "../assets/11.jpg";
import p12 from "../assets/12.jpg";
import p13 from "../assets/13.jpg";
import p14 from "../assets/14.jpg";
import p15 from "../assets/15.jpg";
import p16 from "../assets/16.jpg";
import p17 from "../assets/17.jpg";
import p18 from "../assets/18.jpg";
import p19 from "../assets/19.jpg";
import p20 from "../assets/20.jpg";
/* import p21 from "../assets/21.jpg"; */
import p22 from "../assets/22.jpg";
import p23 from "../assets/23.jpg";
import p24 from "../assets/24.jpg";


/* cards */
import a1 from "../assets/card/1-a.jpg";
import a2 from "../assets/card/2-a.jpg";
import b2 from "../assets/card/2-b.jpg";


import b3 from "../assets/card/3-b.jpg";
import a4 from "../assets/card/4-a.jpg";
import b4 from "../assets/card/4-b.jpg";
import a5 from "../assets/card/5-a.jpg";
import b5 from "../assets/card/5-b.jpg";
import a6 from "../assets/card/6-a.jpg";
import a7 from "../assets/card/7-a.jpg";
import a8 from "../assets/card/8-a.jpg";
import b8 from "../assets/card/8-b.jpg";
import c8 from "../assets/card/8-c.jpg";
import a9 from "../assets/card/9-a.jpg";
import a10 from "../assets/card/10-a.jpg";
import a11 from "../assets/card/11-b.jpg";
import b11 from "../assets/card/11-a.jpg";
import a12 from "../assets/card/12-a.jpg";
import b12 from "../assets/card/12-b.jpg";
import a13 from "../assets/card/13-a.jpg";
import a14 from "../assets/card/14-a.jpg";
import a15 from "../assets/card/15-a.jpg";
import b15 from "../assets/card/15-b.jpg";
import a16 from "../assets/card/16-a.jpg";
import a17 from "../assets/card/17-a.jpg";

import a18 from "../assets/card/18-a.jpg";
import b18 from "../assets/card/18-b.jpg";
import a19 from "../assets/card/19-a.jpg";
import a20 from "../assets/card/20-a.jpg";
import b20 from "../assets/card/20-b.jpg";

import a21 from "../assets/card/21-a.jpg";
import a22 from "../assets/card/22-a.jpg";
import a23 from "../assets/card/23-a.jpg";
import a24 from "../assets/card/24-a.jpg";






 const pics = [
    {   no:1,
        pic:p1,
        a:a1,
        double: true
    },
    {   no:2,
        pic:p2,
        double:true,
        a:a2,
        b:b2
    },
    {   
        no: 3,
        pic: p3,
        b: b3,
        double: true
    },
    {   
        no: 4,
        pic: p4,
        double: true,
        a: a4,
        b:b4
    },{   
        no: 5,
        pic: p5,
        a: a5,
        b: b5,
        double: true
    },
    {   
        no: 6,
        pic: p6,
        double: true,
        a: a6
    },
    {   
        no: 7,
        pic: p7,
        a: a7,
        double: true
    },
    {   
        no: 8,
        pic: p8,
        double: true,
        a: a8,
        b: b8,
        c: c8
    },
    {   
        no: 9,
        pic: p9,
        double: true,
        a: a9
    },
    {   
        no: 10,
        pic: p10,
        double: true,
        a: a10,
    },
    {   
        no: 11,
        pic: p11,
        double: true,
        a: a11,
        b: b11
    },
    {   
        no: 12,
        pic: p12,
        double: true,
        a: a12,
        b: b12
    },
    {   
        no: 13,
        pic: p13,
        double: true,
        a: a13,
    },
    {   
        no: 14,
        pic: p14,
        double: true,
        a: a14,
    },
    {   
        no: 15,
        pic: p15,
        double: true,
        a: a15,
        b: b15
    },
    {   
        no: 16,
        pic: p16,
        double: true,
        a: a16
    },
    {   
        no: 17,
        pic: p17,
        double: true,
        a: a17
    },
    {   
        no: 18,
        pic: p18,
        double: true,
        a: a18,
        b:b18
    },
    {   
        no: 19,
        pic: p19,
        double: true,
        a: a19
    },
    {   
        no: 20,
        pic: p20,
        double: true,
        a: a20,
        b:b20
    },
    /* {   
        no: 21,
        pic: p21,
        double: true,
        a: a21,
    }, */
    {   
        no: 22,
        pic: p22,
        double: true,
        a: a22,
    },
];

const canvasSizes = [
    {   
        no:1,
        a:{
            x1:860,
            y1:330,
            x2:860,
            y2:835
         },
    },{
        no:2,
        a:{
            x1:480,
            y1:165,
            x2:480,
            y2:260
        },b:{
            x1:800,
            y1:565,
            x2:800,
            y2:660
        }
    },
    {
        no:3,
        b:{
            x1:860,
            y1:315,
            x2:860,
            y2:785
        }
    },
    {
        no:4,
        a:{
            x1:830,
            y1:380,
            x2:840,
            y2:825
        },b:{
            x1:800,
            y1:370,
            x2:800,
            y2:825
        }
    },
    {
        no:5,
        a:{
            x1:850,
            y1:430,
            x2:850,
            y2:835
        },b:{
            x1:850,
            y1:430,
            x2:850,
            y2:835
        }
    },
    {
        no:6,
        a:{
            x1:850,
            y1:255,
            x2:850,
            y2:845
        }
    },
    {
        no:7,
        a:{
            x1:850,
            y1:310,
            x2:690,
            y2:850
        }
    },
    {
        no:8,
        a:{
            x1:880,
            y1:345,
            x2:880,
            y2:775
        },
        b:{
            x1:850,
            y1:419,
            x2:840,
            y2:845
        },
        c:{
            x1:850,
            y1:379,
            x2:840,
            y2:805
        }
    },
    {
        no:9,
        a:{
            x1:850,
            y1:365,
            x2:850,
            y2:455
        }
    },
    {
        no:10,
        a:{
            x1:840,
            y1:339,
            x2:380,
            y2:830
        }
    },
    {
        no:11,
        a:{
            x1:860,
            y1:365,
            x2:860,
            y2:835
        }
    },
    {
        no:12,
        a:{
            x1:800,
            y1:325,
            x2:800,
            y2:850
        },
        b:{
            x1:800,
            y1:355,
            x2:800,
            y2:850
        }
    },
    {
        no:13,
        a:{
            x1:840,
            y1:355,
            x2:840,
            y2:840
        }
    },
    {
        no:14,
        a:{
            x1:840,
            y1:305,
            x2:840,
            y2:845
        }
    },
    {
        no:15,
        a:{
            x1:680,
            y1:375,
            x2:680,
            y2:825
        },b:{
            x1:720,
            y1:375,
            x2:720,
            y2:825
        }
    },
    {
        no:16,
        a:{
            x1:870,
            y1:435,
            x2:870,
            y2:825
        }
    },
    {
        no:17,
        a:{
            x1:445,
            y1:385,
            x2:390,
            y2:850
        }
    },
    {
        no:18,
        a:{
            x1:840,
            y1:370,
            x2:840,
            y2:815
        },b:{
            x1:860,
            y1:405,
            x2:860,
            y2:855
        }
    },
    {
        no:19,
        a:{
            x1:840,
            y1:300,
            x2:840,
            y2:835
        }
    },
    {
        no:20,
        a:{
            x1:660,
            y1:370,
            x2:660,
            y2:835
        },b:{
            x1:820,
            y1:300,
            x2:820,
            y2:845
        }
    },
    {
        no:22,
        a:{
            x1:845,
            y1:330,
            x2:845,
            y2:815
        }
    }

]
export {canvasSizes}
export default  pics;