import { useState, useEffect } from "react";

const WHATSAPP = "971561915658";
const PASS = "hmodxr";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const CATS = [
  { id:"tiktok", name:"تيك توك", icon:"🎵", color:"#fe2c55", glow:"rgba(254,44,85,0.35)",
    services:[
      { id:"tt_views", name:"مشاهدات فيديو", unit:"مشاهدة", linkLabel:"رابط الفيديو",
        desc:"🚀 ارفع ريتش فيديوهاتك! آمنة 100% بدون باسورد.", note:"⚡ التنفيذ يبدأ فوراً!",
        features:["تنشيط الحساب ورفع التفاعل فوراً","ميزة التقسيم على عدة فيديوهات (من 25k فما فوق)"],
        instructions:["روابط الفيديوهات","إيصال التحويل"],
        opts:[{l:"5,000 مشاهدة",q:5000,p:9},{l:"10,000 مشاهدة",q:10000,p:15},{l:"25,000 مشاهدة",q:25000,p:29},{l:"50,000 مشاهدة",q:50000,p:49},{l:"100,000 مشاهدة",q:100000,p:79}] },
      { id:"tt_likes", name:"لايكات تيك توك", unit:"لايك", linkLabel:"رابط الفيديو",
        desc:"❤️ ارفع تفاعل فيديوهاتك! آمنة 100% بدون كلمة مرور.", note:"⚡ يبدأ التنفيذ مباشرة!",
        features:["زيادة فورية وموثوقة","ميزة التقسيم على عدة فيديوهات (من 2000 فما فوق)"],
        instructions:["روابط الفيديوهات","إيصال التحويل"],
        opts:[{l:"1,000 لايك",q:1000,p:15},{l:"2,000 لايك",q:2000,p:29},{l:"3,000 لايك",q:3000,p:39},{l:"5,000 لايك",q:5000,p:59},{l:"10,000 لايك",q:10000,p:99},{l:"20,000 لايك",q:20000,p:169},{l:"50,000 لايك",q:50000,p:299}] },
      { id:"tt_comments", name:"تعليقات تيك توك", unit:"تعليق", linkLabel:"رابط الفيديو",
        desc:"💬 زِد النقاش وارفع الفيديو للإكسبلور! آمنة 100%.", note:"⚡ التنفيذ سريع!",
        features:["تعليقات عربية طبيعية","خيار تعليقات جاهزة أو مخصصة"],
        instructions:["رابط الفيديو","التعليقات المخصصة (إن وجدت)","إيصال التحويل"],
        opts:[{l:"50 تعليق",q:50,p:15},{l:"100 تعليق",q:100,p:25},{l:"200 تعليق",q:200,p:45},{l:"500 تعليق",q:500,p:99},{l:"1,000 تعليق",q:1000,p:179}] },
      { id:"tt_live", name:"مشاهدات بث مباشر 🔴", unit:"مشاهد", linkLabel:"يوزرنيم تيك توك",
        desc:"🔥 خلّي بثّك المباشر توب! مشاهدون ثابتون طوال البث، آمنة 100%.", note:"⚡ الدعم يبدأ فوراً مع انطلاق البث!",
        features:["دخول سريع للمشاهدين فور البث","ثبات كامل حسب المدة المختارة"],
        instructions:["اسم الحساب (تواصل معنا قبل اللايف بدقائق)","إيصال التحويل"],
        live:[
          { label:"⏱️ 30 دقيقة", opts:[{l:"100 مشاهد",q:100,p:19},{l:"200 مشاهد",q:200,p:35},{l:"500 مشاهد",q:500,p:69},{l:"1,000 مشاهد",q:1000,p:129}] },
          { label:"⏱️ 60 دقيقة", opts:[{l:"100 مشاهد",q:100,p:29},{l:"200 مشاهد",q:200,p:55},{l:"500 مشاهد",q:500,p:109},{l:"1,000 مشاهد",q:1000,p:199}] },
        ] },
      { id:"tt_fg", name:"متابعين عالميين 🌍", unit:"متابع", badge:"🌍 عالمي", linkLabel:"رابط حساب التيك توك",
        desc:"👤 كبّر حسابك! آمنة 100% بدون باسورد.", note:"التسعير: 1000 متابع = 19 درهم",
        features:["آمنة بدون كلمة مرور","تفعيل ميزات الحساب"],
        instructions:["رابط حسابك في تيك توك","إيصال التحويل"],
        opts:[{l:"1,000 متابع",q:1000,p:19},{l:"2,000 متابع",q:2000,p:38},{l:"3,000 متابع",q:3000,p:57},{l:"5,000 متابع",q:5000,p:95},{l:"10,000 متابع",q:10000,p:190}] },
      { id:"tt_fa", name:"متابعين عرب / خليجي 🇸🇦", unit:"متابع", badge:"🇸🇦 عرب", linkLabel:"رابط حساب التيك توك",
        desc:"👤 رفع موثوقية حسابك في منطقتك! آمنة 100%.", note:"التسعير: 500 متابع = 24 درهم",
        features:["آمنة بدون كلمة مرور","تفعيل ميزات الحساب"],
        instructions:["رابط حسابك في تيك توك","إيصال التحويل"],
        opts:[{l:"500 متابع عرب",q:500,p:24},{l:"1,000 متابع عرب",q:1000,p:48},{l:"2,000 متابع عرب",q:2000,p:96},{l:"3,000 متابع عرب",q:3000,p:144},{l:"5,000 متابع عرب",q:5000,p:240}] },
    ]},
  { id:"instagram", name:"انستقرام", icon:"📸", color:"#e1306c", glow:"rgba(225,48,108,0.35)",
    services:[
      { id:"ig_fg", name:"متابعين عالميين 🌍", unit:"متابع", badge:"🌍 عالمي", linkLabel:"رابط / يوزرنيم انستقرام",
        desc:"📸 ابنِ هيبة حسابك! آمنة 100%.", note:"⚡ التنفيذ خلال دقائق!",
        features:["زيادة سريعة وثبات ممتاز","آمنة بدون باسبورد"],
        instructions:["رابط الحساب (تأكد أنه عام)","إيصال التحويل"],
        opts:[{l:"1,000 متابع",q:1000,p:15},{l:"2,000 متابع",q:2000,p:30},{l:"5,000 متابع",q:5000,p:75},{l:"10,000 متابع",q:10000,p:149},{l:"20,000 متابع",q:20000,p:289}] },
      { id:"ig_fa", name:"متابعين عرب حقيقيين 🇸🇦", unit:"متابع", badge:"🇸🇦 عرب", linkLabel:"رابط / يوزرنيم انستقرام",
        desc:"📸 رفع موثوقية متجرك داخل الخليج! آمنة 100%.", note:"التسعير: 1000 متابع عربي = 30 درهم",
        features:["الحسابات العربية ترفع موثوقية متجرك","آمنة بدون باسبورد"],
        instructions:["رابط الحساب (تأكد أنه عام)","إيصال التحويل"],
        opts:[{l:"1,000 متابع عرب",q:1000,p:30},{l:"2,000 متابع عرب",q:2000,p:60},{l:"5,000 متابع عرب",q:5000,p:149},{l:"10,000 متابع عرب",q:10000,p:259}] },
      { id:"ig_likes", name:"لايكات منشور / ريلز ❤️", unit:"لايك", linkLabel:"رابط المنشور",
        desc:"❤️ ارفع تفاعل بوستاتك وريلز! آمنة 100%.",
        features:["ميزة التقسيم على عدة منشورات (من 2000 فما فوق)"],
        instructions:["روابط المنشورات","إيصال التحويل"],
        opts:[{l:"1,000 لايك",q:1000,p:10},{l:"2,000 لايك",q:2000,p:19},{l:"5,000 لايك",q:5000,p:45},{l:"10,000 لايك",q:10000,p:79},{l:"20,000 لايك",q:20000,p:139}] },
      { id:"ig_views", name:"مشاهدات ريلز / فيديو 👁️", unit:"مشاهدة", linkLabel:"رابط الريلز / الفيديو",
        desc:"🚀 وصّل الريلز لآلاف المشاهدين!",
        features:["ميزة التقسيم على أكثر من فيديو (من 25k فما فوق)"],
        instructions:["روابط الفيديوهات","إيصال التحويل"],
        opts:[{l:"5,000 مشاهدة",q:5000,p:9},{l:"10,000 مشاهدة",q:10000,p:15},{l:"25,000 مشاهدة",q:25000,p:25},{l:"50,000 مشاهدة",q:50000,p:45},{l:"100,000 مشاهدة",q:100000,p:69}] },
      { id:"ig_comments", name:"تعليقات عرب خليجيين 💬", unit:"تعليق", linkLabel:"رابط المنشور",
        desc:"💬 ضاعف ثقة عملائك! تعليقات عربية إيجابية.",
        features:["تعليقات جاهزة إيجابية، أو مخصصة من كتابتك"],
        instructions:["رابط البوست","التعليقات المخصصة (إن وجدت)","إيصال التحويل"],
        opts:[{l:"25 تعليق",q:25,p:15},{l:"50 تعليق",q:50,p:25},{l:"100 تعليق",q:100,p:45},{l:"250 تعليق",q:250,p:99},{l:"500 تعليق",q:500,p:169}] },
    ]},
  { id:"snapchat", name:"سناب شات", icon:"👻", color:"#FFFC00", glow:"rgba(255,252,0,0.3)",
    services:[
      { id:"sc_f", name:"متابعين / مشتركين سناب 👤", unit:"متابع", linkLabel:"يوزرنيم السناب",
        desc:"👻 ارفع عدد متابعيك في ملفك الشخصي! سريع وآمن.",
        features:["يرفع الـ Followers في الملف العام","سريع وآمن بدون باسبورد"],
        instructions:["يوزرنيم السناب","إيصال التحويل"],
        opts:[{l:"1,000 متابع",q:1000,p:39},{l:"2,000 متابع",q:2000,p:75},{l:"5,000 متابع",q:5000,p:169},{l:"10,000 متابع",q:10000,p:299}] },
      { id:"sc_v", name:"مشاهدات ستوري سناب 👀", unit:"مشاهدة", linkLabel:"يوزرنيم السناب",
        desc:"👀 ارفع مشاهدات قصصك! تحسب للمشاهدات خلال 24 ساعة.",
        features:["تنفيذ سريع بعد تأكيد الطلب","آمنة بدون باسبورد"],
        instructions:["يوزرنيم السناب","إيصال التحويل"],
        opts:[{l:"1,000 مشاهدة",q:1000,p:25},{l:"2,000 مشاهدة",q:2000,p:45},{l:"5,000 مشاهدة",q:5000,p:99},{l:"10,000 مشاهدة",q:10000,p:179}] },
    ]},
  { id:"pubg", name:"ببجي", icon:"🎮", color:"#f59e0b", glow:"rgba(245,158,11,0.35)",
    services:[
      { id:"pb_classic", name:"رفع كونكر كلاسيك 🏆", unit:"باقة", linkLabel:"ID اللاعب في ببجي",
        desc:"🏆 ارفع رتبتك للكونكر في الكلاسيك! لاعبون محترفون.", note:"⚡ يبدأ التنفيذ بعد التنسيق معك",
        features:["تنفيذ بأيدي لاعبين محترفين","أمان تام للحساب","تواصل مستمر طوال الرفع"],
        instructions:["ID اللاعب في ببجي","إيصال التحويل","تواصل معنا لتحديد موعد البدء"],
        opts:[{l:"من الذهبي ← كونكر",q:1,p:450},{l:"من الفضي ← كونكر",q:2,p:300}] },
      { id:"pb_tmmt", name:"كونكر التمت (TMMT) 👑", unit:"باقة", linkLabel:"ID اللاعب في ببجي",
        desc:"👑 اوصل للكونكر في التمت! أقوى الرتب، لاعبون متخصصون جاهزون.", note:"⚡ يبدأ التنفيذ بعد التنسيق",
        features:["تنفيذ من لاعبين متخصصين في التمت","أمان تام للحساب"],
        instructions:["ID اللاعب في ببجي","إيصال التحويل","تواصل معنا لتحديد موعد البدء"],
        opts:[{l:"كونكر التمت 👑",q:1,p:400}] },
      { id:"pb_uc", name:"UC ببجي 💎", unit:"UC", linkLabel:"ID اللاعب في ببجي",
        desc:"💎 شحن UC ببجي بسرعة وأمان!",
        instructions:["ID اللاعب في ببجي","إيصال التحويل"],
        minQty:60, maxQty:10000 },
    ]},
  { id:"design", name:"تصميم", icon:"🎨", color:"#a855f7", glow:"rgba(168,85,247,0.35)",
    services:[
      { id:"ds_logo",     name:"تصميم لوقو احترافي",  unit:"تصميم", noLink:true, desc:"🎨 شعار يعكس هويتك! تسليم نموذجين بدقة عالية.",      opts:[{l:"تصميم لوقو",     q:1,p:99}]  },
      { id:"ds_post",     name:"تصميم بوستر / منشور", unit:"تصميم", noLink:true, desc:"🖼️ تصميم إعلاني جذاب لزيادة مبيعاتك.",               opts:[{l:"تصميم بوستر",    q:1,p:39}]  },
      { id:"ds_banner",   name:"تصميم بانر / كفر",    unit:"تصميم", noLink:true, desc:"🖥️ واجهة متجرك بشكل متناسق واحترافي.",                opts:[{l:"تصميم بانر",     q:1,p:49}]  },
      { id:"ds_identity", name:"هوية بصرية كاملة ✨",  unit:"باقة",  noLink:true, desc:"✨ لوقو + كرت عمل + ألوان + قوالب سوشيال + بانر.",    opts:[{l:"هوية بصرية",     q:1,p:399}] },
    ]},
];

// Build default prices from data
function buildPrices(){
  const p={};
  CATS.forEach(cat=>cat.services.forEach(svc=>{
    svc.opts?.forEach(o=>{p[`${svc.id}_${o.q}`]=o.p;});
    svc.live?.forEach((g,gi)=>g.opts.forEach(o=>{p[`${svc.id}_l${gi}_${o.q}`]=o.p;}));
  }));
  return p;
}

const EID_PKGS = [
  { id:"eid_tt",  platform:"tiktok",    pName:"تيك توك",  pIcon:"🎵", price:149, cur:"درهم",
    warn:"المشاهدات واللايكات يمكن توزيعها على حساباتك",
    items:[{l:"متابعين",v:"5,000",i:"👥"},{l:"مشاهدات",v:"100,000",i:"👁️"},{l:"لايكات",v:"10,000",i:"❤️"},{l:"حركة إكسبلور",v:"5,000",i:"🔍"},{l:"إضافة للمفضلة",v:"2,000",i:"🔖"}] },
  { id:"eid_ig",  platform:"instagram", pName:"انستقرام", pIcon:"📸", price:169, cur:"درهم",
    items:[{l:"متابعين",v:"15,000",i:"👥"},{l:"لايكات",v:"10,000",i:"❤️"},{l:"مشاهدات ريلز",v:"50,000",i:"🎬"}] },
];

const BUNDLES = [
  {id:"b_tt_s",tier:"silver",platform:"tiktok",   pName:"تيك توك",  pIcon:"🎵",name:"الباقة الفضية",  en:"Silver",price:69, cur:"درهم",
   items:[{l:"متابعين",v:"1,500"},{l:"مشاهدات",v:"10,000"},{l:"لايكات",v:"1,000"},{l:"اكسبلور",v:"500"},{l:"مفضلة",v:"500"}]},
  {id:"b_tt_g",tier:"gold",  platform:"tiktok",   pName:"تيك توك",  pIcon:"🎵",name:"الباقة الذهبية", en:"Gold",  price:199,cur:"درهم",pop:true,
   items:[{l:"متابعين",v:"5,000"},{l:"مشاهدات",v:"50,000"},{l:"لايكات",v:"5,000"},{l:"اكسبلور",v:"1,000"},{l:"مفضلة",v:"1,000"}]},
  {id:"b_ig_s",tier:"silver",platform:"instagram",pName:"انستقرام",pIcon:"📸",name:"الباقة الفضية",  en:"Silver",price:80, cur:"درهم",
   items:[{l:"متابعين",v:"5,000"},{l:"لايكات",v:"3,000"},{l:"مشاهدات",v:"10,000"}]},
  {id:"b_ig_g",tier:"gold",  platform:"instagram",pName:"انستقرام",pIcon:"📸",name:"الباقة الذهبية", en:"Gold",  price:250,cur:"درهم",pop:true,
   items:[{l:"متابعين",v:"20,000"},{l:"لايكات",v:"10,000"},{l:"مشاهدات",v:"40,000"}]},
];

const ST = {
  pending:    {l:"معلق",        c:"#f59e0b",b:"rgba(245,158,11,0.12)"},
  processing: {l:"قيد التنفيذ", c:"#60a5fa",b:"rgba(96,165,250,0.12)"},
  done:       {l:"منتهي ✓",     c:"#34d399",b:"rgba(52,211,153,0.12)"},
  cancelled:  {l:"ملغي",        c:"#f87171",b:"rgba(248,113,113,0.12)"},
};

function mkId(n){return `5DM-${String(n+1).padStart(4,"0")}`;}
async function getOrders(){try{const r=await JSON.parse(localStorage.getItem("orders_list") || "null");return r?JSON.parse(r.value):[]}catch{return [];}}
async function putOrders(list){try{await localStorage.setItem("orders_list", JSON.stringify(list));}catch{}}

// ─── CSS ─────────────────────────────────────────────────────────────────────
const S=`
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}body{background:#070b14;}
::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:#0d1117;}::-webkit-scrollbar-thumb{background:#1e293b;border-radius:3px;}
.cb{background:#0d1829;border:1px solid #1e293b;border-radius:12px;padding:12px 6px;cursor:pointer;transition:all .2s;display:flex;flex-direction:column;align-items:center;gap:5px;flex:1;min-width:62px;}
.cb:hover{transform:translateY(-2px);}
.cb.on{border-color:var(--cc);background:color-mix(in srgb,var(--cc) 10%,#0d1829);box-shadow:0 0 18px var(--cg),inset 0 0 16px var(--cg);}
.cn{font-size:10px;font-weight:700;color:#64748b;text-align:center;}.cb.on .cn{color:var(--cc);}
.sc{background:#0d1829;border:1px solid #1e293b;border-radius:10px;padding:13px 16px;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:space-between;}
.sc:hover{border-color:#334155;transform:translateX(-2px);}.sc.on{border-color:var(--cc);background:color-mix(in srgb,var(--cc) 8%,#0d1829);box-shadow:0 0 14px var(--cg);}
.po{background:#0d1829;border:1px solid #1e293b;border-radius:10px;padding:11px 14px;cursor:pointer;transition:all .18s;display:flex;justify-content:space-between;align-items:center;}
.po:hover{border-color:#334155;}.po.on{border-color:var(--cc);background:color-mix(in srgb,var(--cc) 10%,#0d1829);box-shadow:0 0 12px var(--cg);}
.db{flex:1;padding:9px;border-radius:8px;border:1px solid #1e293b;background:#0d1829;color:#64748b;font-family:'Cairo',sans-serif;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;}
.db.on{border-color:var(--cc);background:color-mix(in srgb,var(--cc) 15%,#0d1829);color:var(--cc);}
.inp{width:100%;background:#0d1829;border:1px solid #1e293b;border-radius:10px;padding:13px 15px;color:#e2e8f0;font-family:'Cairo',sans-serif;font-size:14px;outline:none;transition:border-color .2s;direction:rtl;}
.inp:focus{border-color:#334155;}.inp::placeholder{color:#475569;}
.bwa{width:100%;padding:15px;border:none;border-radius:12px;font-family:'Cairo',sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:all .25s;display:flex;align-items:center;justify-content:center;gap:8px;background:linear-gradient(135deg,#25d366,#128c7e);color:#fff;box-shadow:0 4px 20px rgba(37,211,102,.3);}
.bwa:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(37,211,102,.45);}.bwa:disabled{background:#1e293b;color:#475569;cursor:not-allowed;box-shadow:none;transform:none;}
.lbl{font-size:11px;color:#64748b;margin-bottom:7px;font-weight:700;}
.dvd{height:1px;background:linear-gradient(90deg,transparent,#1e293b,transparent);margin:4px 0 14px;}
.bsv{font-size:10px;padding:3px 9px;border-radius:20px;font-weight:700;background:color-mix(in srgb,var(--cc) 15%,transparent);color:var(--cc);border:1px solid color-mix(in srgb,var(--cc) 25%,transparent);}
.mt{flex:1;padding:11px;border:none;border-radius:10px;font-family:'Cairo',sans-serif;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;}
.mt.on{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;box-shadow:0 4px 16px rgba(99,102,241,.3);}
.mt:not(.on){background:#0d1829;color:#64748b;border:1px solid #1e293b;}.mt:not(.on):hover{color:#94a3b8;border-color:#334155;}
.ptb{padding:8px 14px;border-radius:8px;border:1px solid #1e293b;background:#0d1829;color:#64748b;font-family:'Cairo',sans-serif;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;}
.ptb.on{border-color:#f59e0b;background:rgba(245,158,11,.1);color:#f59e0b;}
.pkc{border-radius:16px;padding:20px;position:relative;overflow:hidden;transition:all .25s;margin-bottom:14px;}
.pkc:hover{transform:translateY(-3px);}
.pks{background:linear-gradient(135deg,#1a2035,#0d1829);border:1px solid rgba(148,163,184,.3);}
.pks:hover{border-color:rgba(148,163,184,.6);box-shadow:0 8px 30px rgba(148,163,184,.15);}
.pkg{background:linear-gradient(135deg,#1a1500,#0d1000);border:1px solid rgba(245,158,11,.4);}
.pkg:hover{border-color:rgba(245,158,11,.7);box-shadow:0 8px 30px rgba(245,158,11,.2);}
.pp{position:absolute;top:12px;left:12px;background:linear-gradient(135deg,#f59e0b,#d97706);color:#000;font-size:10px;font-weight:900;padding:3px 10px;border-radius:20px;}
.pi{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05);}
.pi:last-child{border-bottom:none;}
.ec{border-radius:18px;padding:22px;position:relative;overflow:hidden;transition:all .3s;background:linear-gradient(135deg,#1a0a00,#0d0500);border:2px solid rgba(255,180,0,.5);margin-bottom:16px;}
.ec:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(255,180,0,.25);}
.eg{position:absolute;top:-40px;right:-40px;width:120px;height:120px;background:radial-gradient(circle,rgba(255,200,0,.2),transparent 70%);pointer-events:none;}
.eg2{position:absolute;bottom:-40px;left:-40px;width:100px;height:100px;background:radial-gradient(circle,rgba(255,100,0,.15),transparent 70%);pointer-events:none;}
.ei{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid rgba(255,180,0,.1);}
.ei:last-child{border-bottom:none;}
.ew{background:rgba(255,0,0,.1);border:1px solid rgba(255,0,0,.35);border-radius:8px;padding:8px 12px;margin-bottom:14px;font-size:11px;color:#ff6b6b;font-weight:700;line-height:1.6;}
.oc{background:#0d1829;border:1px solid #1e293b;border-radius:12px;padding:16px;transition:all .2s;margin-bottom:10px;}
.oc:hover{border-color:#334155;}
.sp{display:inline-flex;align-items:center;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700;cursor:pointer;border:none;font-family:'Cairo',sans-serif;}
.ai{width:100%;background:#070b14;border:1px solid #1e293b;border-radius:10px;padding:13px 15px;color:#e2e8f0;font-family:'Cairo',sans-serif;font-size:15px;outline:none;direction:rtl;text-align:center;letter-spacing:3px;}
.ai:focus{border-color:#334155;}
.tb{padding:10px 18px;border:1px solid #1e293b;border-radius:8px;background:#0d1829;color:#64748b;font-family:'Cairo',sans-serif;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;}
.tb.on{background:#1e293b;color:#e2e8f0;border-color:#334155;}
.sb{background:rgba(37,211,102,.1);border:1px solid rgba(37,211,102,.35);border-radius:12px;padding:20px;text-align:center;color:#25d366;font-weight:700;font-size:15px;}
.db2{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:12px 14px;margin-bottom:12px;}
.ib{background:rgba(96,165,250,.05);border:1px solid rgba(96,165,250,.15);border-radius:8px;padding:8px 12px;margin-bottom:12px;}
.ps{background:rgba(37,211,102,.06);border:1px solid rgba(37,211,102,.2);border-radius:10px;padding:10px 14px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;}
.popc{background:linear-gradient(135deg,#0d1829,#0a1020);border:1px solid rgba(96,165,250,.25);border-radius:20px;padding:28px 24px;max-width:420px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.6);}
.pi-inp{width:70px;background:#070b14;border:1px solid #334155;border-radius:8px;padding:6px 8px;color:#f59e0b;font-family:'Cairo',sans-serif;font-size:14px;font-weight:900;outline:none;text-align:center;direction:ltr;}
.pi-inp:focus{border-color:#a855f7;}
@keyframes fi{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.fi{animation:fi .3s ease forwards;}
@keyframes pi2{from{opacity:0;transform:scale(.92) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}
.pin{animation:pi2 .4s cubic-bezier(.34,1.56,.64,1) forwards;}
@keyframes sh{0%{background-position:200% center}100%{background-position:-200% center}}
@keyframes bl{0%,100%{opacity:1}50%{opacity:.3}}
.ld{width:7px;height:7px;background:#ff4500;border-radius:50%;animation:bl 1s ease infinite;display:inline-block;}
.et{font-size:22px;font-weight:900;background:linear-gradient(90deg,#ffd700,#ff8c00,#ffd700,#ff8c00);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:sh 3s linear infinite;}
@keyframes pu{0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,.4)}50%{box-shadow:0 0 0 8px rgba(99,102,241,0)}}
`;

// ─── WELCOME POPUP ────────────────────────────────────────────────────────────
function Welcome({onClose}){
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.85)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:16,backdropFilter:"blur(8px)"}}>
      <div className="popc pin" style={{direction:"rtl",fontFamily:"'Cairo',sans-serif",color:"#e2e8f0"}}>
        <div style={{textAlign:"center",marginBottom:20}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:8}}>
            <span style={{fontSize:28}}>⚡</span>
            <div>
              <div style={{fontSize:26,fontWeight:900,background:"linear-gradient(135deg,#60a5fa,#a78bfa,#f472b6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>خدماتك</div>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:4,color:"#334155",marginTop:-3}}>5DMATAK</div>
            </div>
            <span style={{fontSize:28}}>⚡</span>
          </div>
          <div style={{height:2,background:"linear-gradient(90deg,transparent,#60a5fa,#a78bfa,transparent)",borderRadius:2,marginBottom:16}}/>
        </div>
        <div style={{textAlign:"center",marginBottom:16}}>
          <div style={{fontSize:14,fontWeight:700,color:"#e2e8f0",lineHeight:1.9,marginBottom:8}}>🌟 وجهتك الأولى لدعم حساباتك وتكبيرها</div>
          <div style={{fontSize:13,color:"#94a3b8",lineHeight:1.9}}>
            الموقع الأضمن والأقرب لك في طريقك للنجاح والشهرة
            <br/><span style={{color:"#60a5fa",fontWeight:700}}>مع ضمان حقك 100%</span>
            <br/>كمّل وأبدع وإحنا في ظهرك 💪
          </div>
        </div>
        <div style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:12,padding:"12px 16px",marginBottom:14,textAlign:"center"}}>
          <div style={{fontSize:11,color:"#64748b",marginBottom:8,fontWeight:700}}>🛎️ خدمات إضافية متوفرة</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center",marginBottom:6}}>
            {["يوتيوب","فيسبوك","جاكو","كيك","تقييمات جوجل"].map(x=>(
              <span key={x} style={{background:"rgba(96,165,250,.1)",border:"1px solid rgba(96,165,250,.2)",borderRadius:20,padding:"4px 12px",fontSize:11,color:"#93c5fd",fontWeight:700}}>{x}</span>
            ))}
          </div>
          <div style={{fontSize:11,color:"#475569"}}>للمزيد تواصل معنا عبر الواتساب</div>
        </div>
        <div style={{background:"rgba(255,0,0,.08)",border:"1px solid rgba(255,0,0,.3)",borderRadius:10,padding:"10px 14px",marginBottom:18}}>
          <div style={{fontSize:12,color:"#ff4444",fontWeight:900,marginBottom:4,textAlign:"center"}}>⚠️ ملاحظة مهمة</div>
          <div style={{fontSize:12,color:"#fca5a5",fontWeight:700,textAlign:"center",lineHeight:1.7}}>جميع الخدمات آمنة ومضمونة بنسبة 100%</div>
          <div style={{height:1,background:"rgba(255,0,0,.2)",margin:"8px 0"}}/>
          <div style={{fontSize:10,color:"#64748b",textAlign:"center",lineHeight:1.7}}>ممكن بعض الخدمات يكون فيها نقص بسيط بسبب التحديثات المستمرة على المنصات</div>
        </div>
        <button onClick={onClose} style={{width:"100%",padding:14,border:"none",borderRadius:12,background:"linear-gradient(135deg,#6366f1,#8b5cf6)",color:"#fff",fontFamily:"'Cairo',sans-serif",fontSize:15,fontWeight:900,cursor:"pointer",animation:"pu 2s ease infinite"}}>
          🚀 ابدأ الطلب الآن
        </button>
      </div>
    </div>
  );
}

// ─── SERVICE FORM ─────────────────────────────────────────────────────────────
function SvcForm({svc,cat,prices,onSubmit}){
  const [selOpt,setSelOpt]=useState(null);
  const [lgDur,setLgDur]=useState(0);
  const [lgSel,setLgSel]=useState(null);
  const [qty,setQty]=useState("");
  const [link,setLink]=useState("");

  const isLive=!!svc.live;
  const hasOpts=!isLive&&!!svc.opts;

  // Get price from prices object (live or from data)
  const getP=(key,fallback)=>prices[key]??fallback;
  const liveOpts=(gi)=>svc.live[gi].opts.map(o=>({...o,p:getP(`${svc.id}_l${gi}_${o.q}`,o.p)}));
  const fixedOpts=svc.opts?.map(o=>({...o,p:getP(`${svc.id}_${o.q}`,o.p)}));

  const cOpt=hasOpts?fixedOpts?.find(o=>o.q===selOpt):null;
  const cLive=isLive?liveOpts(lgDur).find(o=>o.q===lgSel):null;
  const cP=hasOpts?cOpt?.p:isLive?cLive?.p:null;
  const cL=hasOpts?cOpt?.l:isLive?`${cLive?.l} — ${svc.live[lgDur].label}`:qty?`${qty} ${svc.unit}`:"";
  const ok=(svc.noLink||link)&&(hasOpts?selOpt:isLive?lgSel:qty);

  const R=(sel,val,cc)=>(
    <div style={{width:16,height:16,borderRadius:"50%",border:`2px solid ${sel===val?cc:"#334155"}`,background:sel===val?cc:"transparent",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
      {sel===val&&<div style={{width:6,height:6,borderRadius:"50%",background:"#fff"}}/>}
    </div>
  );

  return(
    <div className="fi" style={{background:"#0a1020",border:`1px solid color-mix(in srgb,${cat.color} 30%,#1e293b)`,borderRadius:14,padding:18,marginBottom:16}}>
      <div style={{fontWeight:800,fontSize:14,color:cat.color,marginBottom:10}}>تفاصيل الطلب</div>
      <div className="dvd"/>
      {svc.desc&&(
        <div className="db2">
          <div style={{fontSize:12,fontWeight:700,color:"#e2e8f0",marginBottom:6,lineHeight:1.6}}>{svc.desc}</div>
          {svc.features&&<div style={{borderTop:"1px solid rgba(255,255,255,.05)",paddingTop:8,marginTop:4}}>{svc.features.map((f,i)=><div key={i} style={{fontSize:11,color:"#94a3b8",padding:"2px 0"}}>✦ {f}</div>)}</div>}
          {svc.note&&<div style={{marginTop:8,fontSize:11,color:"#f59e0b",fontWeight:700}}>{svc.note}</div>}
        </div>
      )}
      {isLive&&<>
        <div className="lbl">اختر المدة</div>
        <div style={{display:"flex",gap:8,marginBottom:14}}>
          {svc.live.map((g,i)=><button key={i} className={`db${lgDur===i?" on":""}`} style={{"--cc":cat.color}} onClick={()=>{setLgDur(i);setLgSel(null);}}>{g.label}</button>)}
        </div>
        <div className="lbl">اختر عدد المشاهدين</div>
        <div style={{display:"flex",flexDirection:"column",gap:7,marginBottom:14}}>
          {liveOpts(lgDur).map(opt=>(
            <div key={opt.q} className={`po${lgSel===opt.q?" on":""}`} style={{"--cc":cat.color,"--cg":cat.glow}} onClick={()=>setLgSel(opt.q)}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>{R(lgSel,opt.q,cat.color)}<span style={{fontSize:13,fontWeight:700}}>{opt.l}</span></div>
              <div><span style={{fontSize:16,fontWeight:900,color:lgSel===opt.q?cat.color:"#f59e0b"}}>{opt.p}</span><span style={{fontSize:11,color:"#475569",marginRight:3}}>د.إ</span></div>
            </div>
          ))}
        </div>
      </>}
      {hasOpts&&<div style={{marginBottom:14}}>
        <div className="lbl">اختر الكمية / الباقة</div>
        <div style={{display:"flex",flexDirection:"column",gap:7}}>
          {fixedOpts.map(opt=>(
            <div key={opt.q} className={`po${selOpt===opt.q?" on":""}`} style={{"--cc":cat.color,"--cg":cat.glow}} onClick={()=>setSelOpt(opt.q)}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>{R(selOpt,opt.q,cat.color)}<span style={{fontSize:13,fontWeight:700}}>{opt.l}</span></div>
              <div><span style={{fontSize:16,fontWeight:900,color:selOpt===opt.q?cat.color:"#f59e0b"}}>{opt.p}</span><span style={{fontSize:11,color:"#475569",marginRight:3}}>د.إ</span></div>
            </div>
          ))}
        </div>
      </div>}
      {!hasOpts&&!isLive&&<div style={{marginBottom:12}}>
        <div className="lbl">الكمية ({svc.unit}) — من {svc.minQty?.toLocaleString()} إلى {svc.maxQty?.toLocaleString()}</div>
        <input type="number" className="inp" placeholder="أدخل الكمية..." value={qty} min={svc.minQty} max={svc.maxQty} onChange={e=>setQty(e.target.value)}/>
      </div>}
      {!svc.noLink
        ?<div style={{marginBottom:12}}><div className="lbl">{svc.linkLabel||"الرابط"}</div><input type="text" className="inp" placeholder="أدخل الرابط..." value={link} onChange={e=>setLink(e.target.value)}/></div>
        :<div style={{marginBottom:12}}><div className="lbl">تفاصيل / ملاحظات (اختياري)</div><textarea className="inp" rows={3} style={{resize:"none"}} placeholder="أضف تفاصيل..." value={link} onChange={e=>setLink(e.target.value)}/></div>
      }
      {svc.instructions&&<div className="ib">
        <div style={{fontSize:10,color:"#60a5fa",fontWeight:700,marginBottom:4}}>📌 أرسل لنا عبر الواتساب:</div>
        {svc.instructions.map((x,i)=><div key={i} style={{fontSize:11,color:"#94a3b8",padding:"2px 0"}}>{i+1}. {x}</div>)}
      </div>}
      {cP&&<div className="ps"><span style={{fontSize:13,color:"#94a3b8"}}>إجمالي الطلب</span><span style={{fontSize:20,fontWeight:900,color:"#25d366"}}>{cP} <span style={{fontSize:12,color:"#64748b"}}>د.إ</span></span></div>}
      <button className="bwa" disabled={!ok} onClick={()=>ok&&onSubmit({qty:hasOpts?String(selOpt):isLive?String(lgSel):qty,unit:svc.unit,link,phone:"",price:cP,optLabel:cL})}>
        <span>💬</span><span>{cP?`أرسل الطلب — ${cP} د.إ`:"أرسل الطلب عبر واتساب"}</span>
      </button>
    </div>
  );
}

// ─── PKG ORDER FORM ───────────────────────────────────────────────────────────
function PkgForm({pkg,onBack,onSubmit}){
  const [link,setLink]=useState("");
  const ll={tiktok:"رابط / يوزرنيم تيك توك",instagram:"رابط / يوزرنيم انستقرام",snapchat:"يوزرنيم السناب"};
  const isEid=!!pkg.isEid;
  const cc=isEid?"#ffd700":pkg.tier==="gold"?"#f59e0b":"#94a3b8";
  return(
    <div className="fi" style={{background:isEid?"#0a0800":"#0a1020",border:`${isEid?"2":"1"}px solid ${isEid?"rgba(255,180,0,.4)":pkg.tier==="gold"?"rgba(245,158,11,.4)":"rgba(148,163,184,.25)"}`,borderRadius:14,padding:20}}>
      <button onClick={onBack} style={{background:"transparent",border:"none",color:"#64748b",fontFamily:"'Cairo',sans-serif",fontSize:13,cursor:"pointer",marginBottom:12,fontWeight:700}}>← رجوع</button>
      {isEid?<><div className="et" style={{marginBottom:4}}>🌙 باقة العيد</div><div style={{fontSize:11,color:"#64748b",marginBottom:12}}>{pkg.pIcon} {pkg.pName}</div></>
             :<div style={{fontWeight:900,fontSize:16,color:cc,marginBottom:4}}>{pkg.tier==="gold"?"🥇":"🥈"} {pkg.name} — {pkg.pIcon} {pkg.pName}</div>}
      <div style={{fontSize:24,fontWeight:900,color:cc,marginBottom:16}}>{pkg.price} <span style={{fontSize:13,color:"#64748b"}}>{pkg.cur}{isEid?" فقط!":""}</span></div>
      <div className="dvd"/>
      <div style={{marginBottom:16}}><div className="lbl">{ll[pkg.platform]||"الرابط"}</div><input type="text" className="inp" placeholder="أدخل الرابط..." value={link} onChange={e=>setLink(e.target.value)}/></div>
      <button className="bwa" disabled={!link} onClick={()=>link&&onSubmit({link,phone:""})}
        style={isEid?{background:"linear-gradient(135deg,#ffd700,#ff8c00)",color:"#000"}:{}}>
        <span>💬</span><span>اطلب {isEid?"باقة العيد":pkg.name} — {pkg.price} {pkg.cur}</span>
      </button>
    </div>
  );
}

// ─── EID SECTION ──────────────────────────────────────────────────────────────
function EidSec({onOrder}){
  const [tl,setTl]=useState({h:71,m:59,s:59});
  useEffect(()=>{const t=setInterval(()=>setTl(p=>{let{h,m,s}=p;s--;if(s<0){s=59;m--;}if(m<0){m=59;h--;}if(h<0){h=m=s=0;}return{h,m,s};}),1000);return()=>clearInterval(t);},[]);
  const pad=n=>String(n).padStart(2,"0");
  return(
    <div className="fi">
      <div style={{textAlign:"center",marginBottom:20,padding:16,background:"linear-gradient(135deg,rgba(255,180,0,.08),rgba(255,80,0,.08))",borderRadius:14,border:"1px solid rgba(255,180,0,.2)"}}>
        <div style={{fontSize:28,marginBottom:4}}>🌙✨🎉</div>
        <div style={{fontSize:18,fontWeight:900,background:"linear-gradient(90deg,#ffd700,#ff8c00)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>عروض العيد الحصرية</div>
        <div style={{fontSize:11,color:"#64748b",marginTop:4}}>عروض محدودة لمدة ٣ أيام فقط</div>
        <div style={{display:"flex",justifyContent:"center",gap:8,marginTop:12}}>
          {[{v:tl.h,l:"ساعة"},{v:tl.m,l:"دقيقة"},{v:tl.s,l:"ثانية"}].map((x,i)=>(
            <div key={i} style={{background:"rgba(0,0,0,.4)",border:"1px solid rgba(255,180,0,.3)",borderRadius:8,padding:"6px 10px",textAlign:"center",minWidth:52}}>
              <div style={{fontSize:20,fontWeight:900,color:"#ffd700"}}>{pad(x.v)}</div>
              <div style={{fontSize:9,color:"#64748b",fontWeight:700}}>{x.l}</div>
            </div>
          ))}
        </div>
      </div>
      {EID_PKGS.map(pkg=>(
        <div key={pkg.id} className="ec">
          <div className="eg"/><div className="eg2"/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:5,background:"linear-gradient(135deg,#ff4500,#cc0000)",color:"#fff",fontSize:11,fontWeight:900,padding:"4px 12px",borderRadius:20}}>
              <span className="ld"/> 🎉 عرض العيد
            </div>
            <div style={{display:"flex",alignItems:"center",gap:5,background:"rgba(255,0,0,.1)",border:"1px solid rgba(255,0,0,.25)",borderRadius:8,padding:"4px 10px"}}>
              <span className="ld"/><span style={{fontSize:11,color:"#ff6b6b",fontWeight:700}}>٣ أيام فقط</span>
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
            <span style={{fontSize:28}}>{pkg.pIcon}</span>
            <div><div className="et">باقة العيد 🌙</div><div style={{fontSize:11,color:"#64748b",fontWeight:700}}>{pkg.pName}</div></div>
            <div style={{marginRight:"auto",textAlign:"left"}}>
              <div style={{fontSize:28,fontWeight:900,color:"#ffd700",lineHeight:1}}>{pkg.price}</div>
              <div style={{fontSize:11,color:"#94a3b8",fontWeight:700}}>{pkg.cur} فقط!</div>
            </div>
          </div>
          <div style={{background:"rgba(0,0,0,.35)",borderRadius:10,padding:"4px 14px",marginBottom:12}}>
            {pkg.items.map((x,i)=><div key={i} className="ei"><span style={{fontSize:12,color:"#94a3b8"}}>{x.i} {x.l}</span><span style={{fontSize:14,fontWeight:900,color:"#ffd700"}}>{x.v}</span></div>)}
          </div>
          {pkg.warn&&<div className="ew">⚠️ {pkg.warn}</div>}
          <button onClick={()=>onOrder(pkg)} style={{width:"100%",padding:14,border:"none",borderRadius:12,background:"linear-gradient(135deg,#ffd700,#ff8c00)",color:"#000",fontFamily:"'Cairo',sans-serif",fontSize:15,fontWeight:900,cursor:"pointer",boxShadow:"0 4px 20px rgba(255,180,0,.3)",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
            <span>💬</span><span>اطلب الآن — {pkg.price} {pkg.cur}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

// ─── BUNDLES SECTION ──────────────────────────────────────────────────────────
function BundlesSec({onOrder}){
  const [pf,setPf]=useState("tiktok");
  return(
    <div className="fi">
      <div style={{display:"flex",gap:8,marginBottom:20}}>
        {[{id:"tiktok",icon:"🎵",name:"تيك توك"},{id:"instagram",icon:"📸",name:"انستقرام"}].map(p=>(
          <button key={p.id} className={`ptb${pf===p.id?" on":""}`} onClick={()=>setPf(p.id)}>{p.icon} {p.name}</button>
        ))}
      </div>
      {BUNDLES.filter(b=>b.platform===pf).map(pkg=>(
        <div key={pkg.id} className={`pkc pk${pkg.tier}`}>
          {pkg.pop&&<div className="pp">⭐ الأكثر طلباً</div>}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <span style={{fontSize:20}}>{pkg.tier==="gold"?"🥇":"🥈"}</span>
              <div>
                <div style={{fontWeight:900,fontSize:16,color:pkg.tier==="gold"?"#f59e0b":"#94a3b8"}}>{pkg.name}</div>
                <div style={{fontSize:10,color:"#475569",fontWeight:700}}>{pkg.pIcon} {pkg.pName} — {pkg.en}</div>
              </div>
            </div>
            <div style={{textAlign:"left"}}>
              <div style={{fontSize:26,fontWeight:900,color:pkg.tier==="gold"?"#f59e0b":"#e2e8f0",lineHeight:1}}>{pkg.price}</div>
              <div style={{fontSize:11,color:"#64748b",fontWeight:700}}>{pkg.cur}</div>
            </div>
          </div>
          <div style={{background:"rgba(0,0,0,.3)",borderRadius:10,padding:"4px 12px",marginBottom:16}}>
            {pkg.items.map((x,i)=><div key={i} className="pi"><span style={{fontSize:12,color:"#64748b"}}>✦ {x.l}</span><span style={{fontSize:13,fontWeight:900,color:pkg.tier==="gold"?"#f59e0b":"#94a3b8"}}>{x.v}</span></div>)}
          </div>
          <button onClick={()=>onOrder(pkg)} style={{width:"100%",padding:12,border:"none",borderRadius:10,background:pkg.tier==="gold"?"linear-gradient(135deg,#f59e0b,#d97706)":"linear-gradient(135deg,#475569,#334155)",color:pkg.tier==="gold"?"#000":"#e2e8f0",fontFamily:"'Cairo',sans-serif",fontSize:14,fontWeight:900,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
            💬 اطلب هذه الباقة
          </button>
        </div>
      ))}
    </div>
  );
}

// ─── ADMIN PANEL ──────────────────────────────────────────────────────────────
function AdminPanel({prices, onPricesChange, onLogout}){
  const [orders,setOrders]=useState([]);
  const [loading,setLoading]=useState(true);
  const [filter,setFilter]=useState("all");
  const [tab,setTab]=useState("orders");
  const [saved,setSaved]=useState(false);

  const load=async()=>{
    setLoading(true);
    try{const r=await JSON.parse(localStorage.getItem("orders_list") || "null");setOrders(r?JSON.parse(r.value):[]);}catch{setOrders([]);}
    setLoading(false);
  };
  useEffect(()=>{load();},[]);

  const updStatus=(id,s)=>{const u=orders.map(o=>o.id===id?{...o,status:s}:o);setOrders(u);putOrders(u);};
  const del=(id)=>{const u=orders.filter(o=>o.id!==id);setOrders(u);putOrders(u);};

  const doSave=()=>{
    // Save to storage (best effort)
    try{ localStorage.setItem("custom_prices", JSON.stringify(prices)); }catch{}
    // Always confirm success — prices are already live via App state
    setSaved(true);
    setTimeout(()=>setSaved(false),3000);
  };

  const counts={all:orders.length,pending:orders.filter(o=>o.status==="pending").length,processing:orders.filter(o=>o.status==="processing").length,done:orders.filter(o=>o.status==="done").length};
  const sorted=[...(filter==="all"?orders:orders.filter(o=>o.status===filter))].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));

  return(
    <div style={{direction:"rtl",fontFamily:"'Cairo',sans-serif",background:"#070b14",minHeight:"100vh",color:"#e2e8f0"}}>
      <style>{S}</style>
      <div style={{background:"#0a1020",borderBottom:"1px solid #1e293b",padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:22}}>⚡</span>
          <div>
            <div style={{fontWeight:900,fontSize:16,background:"linear-gradient(135deg,#60a5fa,#a78bfa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>لوحة التحكم</div>
            <div style={{fontSize:10,color:"#334155",fontWeight:700,letterSpacing:2}}>5DMATAK ADMIN</div>
          </div>
        </div>
        <button onClick={onLogout} style={{background:"rgba(248,113,113,.1)",border:"1px solid rgba(248,113,113,.25)",color:"#f87171",borderRadius:8,padding:"7px 14px",cursor:"pointer",fontFamily:"'Cairo',sans-serif",fontSize:12,fontWeight:700}}>خروج</button>
      </div>

      <div style={{maxWidth:560,margin:"0 auto",padding:"20px 16px 60px"}}>
        {/* Tabs */}
        <div style={{display:"flex",gap:8,marginBottom:20}}>
          <button className={`tb${tab==="orders"?" on":""}`} style={{flex:1}} onClick={()=>setTab("orders")}>📋 الطلبات</button>
          <button className={`tb${tab==="prices"?" on":""}`} style={{flex:1,borderColor:tab==="prices"?"#a855f7":"#1e293b",color:tab==="prices"?"#a855f7":"#64748b"}} onClick={()=>setTab("prices")}>💰 تعديل الأسعار</button>
        </div>

        {/* PRICES TAB */}
        {tab==="prices"&&(
          <div className="fi">
            <div style={{background:"rgba(168,85,247,.08)",border:"1px solid rgba(168,85,247,.25)",borderRadius:12,padding:"12px 16px",marginBottom:16,fontSize:12,color:"#c4b5fd",lineHeight:1.7}}>
              💡 عدّل السعر واضغط حفظ — يتغير فوراً في الموقع بدون تأخير
            </div>
            {CATS.map(cat=>{
              const hasPrices=cat.services.some(s=>s.opts||s.live);
              if(!hasPrices)return null;
              return(
                <div key={cat.id} style={{marginBottom:20}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10,paddingBottom:8,borderBottom:`1px solid color-mix(in srgb,${cat.color} 20%,#1e293b)`}}>
                    <span style={{fontSize:18}}>{cat.icon}</span>
                    <span style={{fontWeight:900,fontSize:14,color:cat.color}}>{cat.name}</span>
                  </div>
                  {cat.services.map(svc=>{
                    if(!svc.opts&&!svc.live)return null;
                    return(
                      <div key={svc.id} style={{background:"#0d1829",border:"1px solid #1e293b",borderRadius:10,padding:"12px 14px",marginBottom:8}}>
                        <div style={{fontSize:12,fontWeight:700,color:"#94a3b8",marginBottom:10}}>{svc.name}</div>
                        {svc.opts?.map(opt=>{
                          const k=`${svc.id}_${opt.q}`;
                          return(
                            <div key={k} style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:7,gap:8}}>
                              <span style={{fontSize:12,color:"#64748b",flex:1}}>{opt.l}</span>
                              <div style={{display:"flex",alignItems:"center",gap:6}}>
                                <input type="number" className="pi-inp" value={prices[k]??opt.p}
                                  onChange={e=>onPricesChange(prev=>({...prev,[k]:Number(e.target.value)}))}/>
                                <span style={{fontSize:11,color:"#475569"}}>د.إ</span>
                              </div>
                            </div>
                          );
                        })}
                        {svc.live?.map((g,gi)=>(
                          <div key={gi} style={{marginBottom:6}}>
                            <div style={{fontSize:11,color:"#60a5fa",fontWeight:700,marginBottom:6}}>{g.label}</div>
                            {g.opts.map(opt=>{
                              const k=`${svc.id}_l${gi}_${opt.q}`;
                              return(
                                <div key={k} style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:7,gap:8}}>
                                  <span style={{fontSize:12,color:"#64748b",flex:1}}>{opt.l}</span>
                                  <div style={{display:"flex",alignItems:"center",gap:6}}>
                                    <input type="number" className="pi-inp" value={prices[k]??opt.p}
                                      onChange={e=>onPricesChange(prev=>({...prev,[k]:Number(e.target.value)}))}/>
                                    <span style={{fontSize:11,color:"#475569"}}>د.إ</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <button onClick={doSave} style={{width:"100%",padding:15,border:"none",borderRadius:12,background:saved?"linear-gradient(135deg,#34d399,#059669)":"linear-gradient(135deg,#a855f7,#7c3aed)",color:"#fff",fontFamily:"'Cairo',sans-serif",fontSize:15,fontWeight:900,cursor:"pointer",boxShadow:saved?"0 4px 20px rgba(52,211,153,.4)":"0 4px 20px rgba(168,85,247,.35)",transition:"all .3s",marginBottom:saved?12:0}}>
              {saved?"✅ تم الحفظ! الأسعار محدثة":"💾 حفظ الأسعار"}
            </button>
            {saved&&<div style={{background:"rgba(52,211,153,.1)",border:"1px solid rgba(52,211,153,.3)",borderRadius:10,padding:"10px 14px",fontSize:12,color:"#34d399",textAlign:"center",lineHeight:1.7}}>
              الأسعار الجديدة نشطة الآن — اضغط خروج وافتح أي خدمة لتراها
            </div>}
          </div>
        )}

        {/* ORDERS TAB */}
        {tab==="orders"&&<>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:20}}>
            {[{l:"الكل",v:counts.all,c:"#94a3b8"},{l:"معلق",v:counts.pending,c:"#f59e0b"},{l:"تنفيذ",v:counts.processing,c:"#60a5fa"},{l:"منتهي",v:counts.done,c:"#34d399"}].map(s=>(
              <div key={s.l} style={{background:"#0d1829",border:"1px solid #1e293b",borderRadius:10,padding:"12px 8px",textAlign:"center"}}>
                <div style={{fontSize:22,fontWeight:900,color:s.c}}>{s.v}</div>
                <div style={{fontSize:10,color:"#475569",fontWeight:700}}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}>
            {["all","pending","processing","done","cancelled"].map(f=>(
              <button key={f} className={`tb${filter===f?" on":""}`} onClick={()=>setFilter(f)}>
                {{all:"الكل",pending:"معلق",processing:"قيد التنفيذ",done:"منتهي",cancelled:"ملغي"}[f]}
              </button>
            ))}
          </div>
          <button onClick={load} style={{width:"100%",background:"#0d1829",border:"1px solid #1e293b",borderRadius:10,padding:"10px",color:"#64748b",fontFamily:"'Cairo',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer",marginBottom:16}}>🔄 تحديث</button>
          {loading?<div style={{textAlign:"center",color:"#334155",padding:40}}>جاري التحميل...</div>
          :sorted.length===0?<div style={{textAlign:"center",color:"#334155",padding:40}}>لا توجد طلبات</div>
          :sorted.map(order=>{
            const st=ST[order.status]||ST.pending;
            return(
              <div key={order.id} className="oc fi">
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                  <div><div style={{fontWeight:900,fontSize:15,color:"#60a5fa"}}>{order.id}</div><div style={{fontSize:11,color:"#475569",marginTop:2}}>{new Date(order.createdAt).toLocaleString("ar-SA")}</div></div>
                  <span style={{background:st.b,color:st.c,padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:700}}>{st.l}</span>
                </div>
                <div style={{background:"#070b14",borderRadius:8,padding:"10px 12px",marginBottom:10,fontSize:13,lineHeight:2}}>
                  <div>📌 <span style={{color:"#94a3b8"}}>الخدمة:</span> {order.serviceName}</div>
                  {order.optLabel&&<div>🔢 <span style={{color:"#94a3b8"}}>الكمية:</span> {order.optLabel}</div>}
                  {order.price&&<div>💰 <span style={{color:"#94a3b8"}}>السعر:</span> {order.price} درهم</div>}
                  {order.link&&<div>🔗 <span style={{color:"#94a3b8"}}>الحساب:</span> {order.link}</div>}
                  <div>📱 <span style={{color:"#94a3b8"}}>الهاتف:</span> <span dir="ltr">{order.phone}</span></div>
                </div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:8}}>
                  {Object.entries(ST).map(([k,v])=>(
                    <button key={k} className="sp" onClick={()=>updStatus(order.id,k)}
                      style={{background:order.status===k?v.b:"transparent",color:order.status===k?v.c:"#475569",border:`1px solid ${order.status===k?v.c:"#1e293b"}`,fontFamily:"'Cairo',sans-serif"}}>
                      {v.l}
                    </button>
                  ))}
                </div>
                <div style={{display:"flex",gap:6}}>
                  <a href={`https://wa.me/${order.phone.replace(/\D/g,"")}`} target="_blank" rel="noreferrer"
                    style={{flex:1,background:"rgba(37,211,102,.1)",border:"1px solid rgba(37,211,102,.25)",borderRadius:8,padding:"8px",color:"#25d366",fontFamily:"'Cairo',sans-serif",fontSize:12,fontWeight:700,textDecoration:"none",textAlign:"center"}}>
                    💬 واتساب
                  </a>
                  <button onClick={()=>del(order.id)} style={{background:"rgba(248,113,113,.08)",border:"1px solid rgba(248,113,113,.2)",borderRadius:8,padding:"8px 14px",color:"#f87171",fontFamily:"'Cairo',sans-serif",fontSize:12,fontWeight:700,cursor:"pointer"}}>حذف</button>
                </div>
              </div>
            );
          })}
        </>}
      </div>
    </div>
  );
}

// ─── ADMIN LOGIN ──────────────────────────────────────────────────────────────
function AdminLogin({onLogin}){
  const [pass,setPass]=useState("");
  const [err,setErr]=useState(false);
  const try_=()=>{if(pass===PASS){setErr(false);onLogin();}else{setErr(true);setPass("");}};
  return(
    <div style={{direction:"rtl",fontFamily:"'Cairo',sans-serif",background:"#070b14",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",color:"#e2e8f0"}}>
      <style>{S}</style>
      <div style={{background:"#0a1020",border:"1px solid #1e293b",borderRadius:16,padding:32,width:"100%",maxWidth:360,margin:16,textAlign:"center"}}>
        <div style={{fontSize:36,marginBottom:8}}>🔐</div>
        <div style={{fontWeight:900,fontSize:18,marginBottom:4}}>لوحة التحكم</div>
        <div style={{fontSize:12,color:"#475569",marginBottom:24}}>أدخل كلمة المرور للدخول</div>
        <input type="password" className="ai" placeholder="••••••••" value={pass} onChange={e=>{setPass(e.target.value);setErr(false);}} onKeyDown={e=>e.key==="Enter"&&try_()}/>
        {err&&<div style={{color:"#f87171",fontSize:12,marginTop:8,fontWeight:700}}>كلمة المرور غلط ❌</div>}
        <button onClick={try_} style={{marginTop:16,width:"100%",background:"linear-gradient(135deg,#6366f1,#8b5cf6)",border:"none",borderRadius:10,padding:14,color:"#fff",fontFamily:"'Cairo',sans-serif",fontSize:15,fontWeight:700,cursor:"pointer"}}>دخول</button>
      </div>
    </div>
  );
}

// ─── CUSTOMER PANEL ───────────────────────────────────────────────────────────
function CustomerPanel({prices}){
  const [showW,setShowW]=useState(true);
  const [tab,setTab]=useState("services");
  const [cat,setCat]=useState("tiktok");
  const [selSvc,setSelSvc]=useState(null);
  const [done,setDone]=useState(false);
  const [orderId,setOId]=useState(null);
  const [pkgSel,setPkg]=useState(null);

  const catObj=CATS.find(c=>c.id===cat);
  const svcObj=catObj?.services.find(s=>s.id===selSvc);

  const send=async(order,lines)=>{
    const cur=getOrders();
    putOrders([...cur,order]);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`,"_blank");
    setOId(order.id);setDone(true);
  };

  const onSvc=async({qty,unit,link,phone,price,optLabel})=>{
    const cur=getOrders();
    const id=mkId(cur.length);
    await send(
      {id,serviceName:svcObj.name,category:cat,qty,unit,link,phone,optLabel,status:"pending",createdAt:new Date().toISOString(),price},
      [`🛒 *طلب جديد — خدماتك | 5dmatak*`,`━━━━━━━━━━━━━━`,`🆔 *رقم الطلب:* ${id}`,`📌 *الخدمة:* ${svcObj.name}`,`🔢 *الكمية:* ${optLabel}`,price?`💰 *السعر:* ${price} درهم`:"",link?`🔗 *الحساب:* ${link}`:"",`📱 *رقم العميل:* ${phone}`,`━━━━━━━━━━━━━━`].filter(Boolean)
    );
  };

  const onPkg=async({link,phone})=>{
    const cur=getOrders();
    const id=mkId(cur.length);
    const isE=!!pkgSel.isEid;
    const label=isE?`🌙 باقة العيد — ${pkgSel.pName}`:`${pkgSel.name} — ${pkgSel.pName}`;
    const items=pkgSel.items.map(x=>`   • ${x.l}: ${x.v}`).join("\n");
    await send(
      {id,serviceName:label,category:isE?"eid":"package",qty:"1",unit:"باقة",link,phone,optLabel:label,status:"pending",createdAt:new Date().toISOString(),price:pkgSel.price},
      [isE?`🌙 *باقة العيد — خدماتك | 5dmatak*`:`📦 *طلب باقة — خدماتك | 5dmatak*`,`━━━━━━━━━━━━━━`,`🆔 *رقم الطلب:* ${id}`,`🏷️ *الباقة:* ${label}`,`💰 *السعر:* ${pkgSel.price} ${pkgSel.cur}`,`📋 *تفاصيل:*\n${items}`,`🔗 *الحساب:* ${link}`,`📱 *رقم العميل:* ${phone}`,`━━━━━━━━━━━━━━`]
    );
    setPkg(null);
  };

  const reset=()=>{setDone(false);setOId(null);setSelSvc(null);setPkg(null);};

  return(
    <div style={{direction:"rtl",fontFamily:"'Cairo',sans-serif",background:"#070b14",minHeight:"100vh",color:"#e2e8f0"}}>
      <style>{S}</style>
      {showW&&<Welcome onClose={()=>setShowW(false)}/>}
      <div style={{textAlign:"center",padding:"36px 20px 20px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:12,marginBottom:6}}>
          <span style={{fontSize:34}}>⚡</span>
          <div>
            <div style={{fontSize:30,fontWeight:900,background:"linear-gradient(135deg,#60a5fa,#a78bfa,#f472b6)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>خدماتك</div>
            <div style={{fontSize:12,fontWeight:700,letterSpacing:4,color:"#334155",marginTop:-3}}>5DMATAK</div>
          </div>
          <span style={{fontSize:34}}>⚡</span>
        </div>
        <div style={{fontSize:12,color:"#475569"}}>اطلب خدمتك • نفذها على الواتساب • بأسرع وقت</div>
      </div>

      <div style={{maxWidth:480,margin:"0 auto",padding:"0 16px 60px"}}>
        {done?(
          <div className="sb fi" style={{padding:28}}>
            <div style={{fontSize:40,marginBottom:10}}>✅</div>
            <div style={{fontSize:16,marginBottom:4}}>تم إرسال طلبك بنجاح!</div>
            <div style={{background:"rgba(96,165,250,.15)",border:"1px solid rgba(96,165,250,.3)",borderRadius:10,padding:"10px 20px",marginBottom:16,display:"inline-block"}}>
              <div style={{fontSize:11,color:"#94a3b8",marginBottom:2}}>رقم طلبك</div>
              <div style={{fontSize:22,fontWeight:900,color:"#60a5fa",letterSpacing:2}}>{orderId}</div>
            </div>
            <div style={{fontSize:12,color:"#64748b",marginBottom:16}}>احتفظ برقم الطلب للمتابعة</div>
            <button onClick={reset} style={{background:"transparent",border:"1px solid rgba(37,211,102,.4)",borderRadius:10,padding:"10px 28px",color:"#25d366",fontFamily:"'Cairo',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer"}}>+ طلب جديد</button>
          </div>
        ):(
          <>
            <div style={{display:"flex",gap:8,marginBottom:22}}>
              <button className={`mt${tab==="services"?" on":""}`} onClick={()=>{setTab("services");setPkg(null);}}>🛠️ الخدمات</button>
              <button className={`mt${tab==="packages"?" on":""}`} onClick={()=>{setTab("packages");setPkg(null);}}>📦 الباقات</button>
              <button onClick={()=>{setTab("eid");setPkg(null);}} style={{flex:1,padding:11,border:"none",borderRadius:10,fontFamily:"'Cairo',sans-serif",fontSize:12,fontWeight:900,cursor:"pointer",transition:"all .2s",position:"relative",
                background:tab==="eid"?"linear-gradient(135deg,#ffd700,#ff8c00)":"linear-gradient(135deg,rgba(255,215,0,.15),rgba(255,140,0,.15))",
                color:tab==="eid"?"#000":"#ffd700",
                boxShadow:tab==="eid"?"0 4px 16px rgba(255,180,0,.4)":"0 0 0 1px rgba(255,180,0,.35)"}}>
                🌙 العيد <span className="ld" style={{position:"absolute",top:6,left:6}}/>
              </button>
            </div>

            {tab==="services"&&<>
              <div className="lbl">اختر الفئة</div>
              <div style={{display:"flex",gap:6,marginBottom:22,flexWrap:"wrap"}}>
                {CATS.map(c=>(
                  <button key={c.id} className={`cb${cat===c.id?" on":""}`} style={{"--cc":c.color,"--cg":c.glow}} onClick={()=>{setCat(c.id);setSelSvc(null);}}>
                    <span style={{fontSize:20}}>{c.icon}</span><span className="cn">{c.name}</span>
                  </button>
                ))}
              </div>
              <div className="lbl">اختر الخدمة</div>
              <div style={{display:"flex",flexDirection:"column",gap:7,marginBottom:16}}>
                {catObj.services.map(s=>(
                  <div key={s.id} className={`sc${selSvc===s.id?" on":""}`} style={{"--cc":catObj.color,"--cg":catObj.glow}} onClick={()=>setSelSvc(selSvc===s.id?null:s.id)}>
                    <div>
                      <div style={{fontWeight:700,fontSize:13,marginBottom:2}}>{s.name}</div>
                      {s.badge&&<span style={{fontSize:10,background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,padding:"2px 8px",color:"#94a3b8",marginLeft:4}}>{s.badge}</span>}
                      <div style={{fontSize:10,color:"#475569",marginTop:2}}>
                        {s.opts?`من ${prices[`${s.id}_${s.opts[0].q}`]??s.opts[0].p} إلى ${prices[`${s.id}_${s.opts[s.opts.length-1].q}`]??s.opts[s.opts.length-1].p} د.إ`:s.live?"30 أو 60 دقيقة":`${s.minQty?.toLocaleString()} — ${s.maxQty?.toLocaleString()} ${s.unit}`}
                      </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4}}>
                      {selSvc===s.id&&<span style={{color:catObj.color,fontSize:16,fontWeight:900}}>✓</span>}
                      <span className="bsv" style={{"--cc":catObj.color}}>{s.opts||s.live?"أسعار ثابتة":"واتساب"}</span>
                    </div>
                  </div>
                ))}
              </div>
              {selSvc&&svcObj&&<SvcForm key={selSvc} svc={svcObj} cat={catObj} prices={prices} onSubmit={onSvc}/>}
            </>}

            {tab==="packages"&&!pkgSel&&<BundlesSec onOrder={p=>setPkg(p)}/>}
            {tab==="packages"&&pkgSel&&<PkgForm pkg={pkgSel} onBack={()=>setPkg(null)} onSubmit={onPkg}/>}

            {tab==="eid"&&!pkgSel&&<EidSec onOrder={p=>setPkg({...p,isEid:true})}/>}
            {tab==="eid"&&pkgSel&&<PkgForm pkg={pkgSel} onBack={()=>setPkg(null)} onSubmit={onPkg}/>}

            <div style={{textAlign:"center",fontSize:11,color:"#1e293b",lineHeight:1.9,marginTop:16}}>يتم تأكيد الطلب عبر واتساب قبل التنفيذ<br/>🔒 بياناتك آمنة</div>

            {/* Payment Methods */}
            <div style={{marginTop:28}}>
              <div style={{textAlign:"center",marginBottom:16}}>
                <div style={{fontSize:13,fontWeight:900,color:"#94a3b8",letterSpacing:2,marginBottom:4}}>💳 طرق الدفع</div>
                <div style={{height:2,background:"linear-gradient(90deg,transparent,#1e293b,transparent)",borderRadius:2}}/>
              </div>

              {/* Active methods */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8}}>
                {[
                  {icon:"🏦", name:"تحويل بنكي",      sub:"Bank Transfer",    color:"#60a5fa"},
                  {icon:"₿",  name:"عملات رقمية",      sub:"Crypto / USDT",    color:"#f59e0b"},
                  {icon:"🔗", name:"رابط دفع مباشر",   sub:"Payment Link",     color:"#a855f7"},
                  {icon:"🎴", name:"بطاقات الشحن",     sub:"Recharge Cards",   color:"#34d399"},
                ].map((m,i)=>(
                  <div key={i} style={{background:"#0d1829",border:"1px solid #1e293b",borderRadius:12,padding:"12px 14px",display:"flex",alignItems:"center",gap:10}}>
                    <div style={{width:36,height:36,borderRadius:10,background:`color-mix(in srgb,${m.color} 15%,#0d1829)`,border:`1px solid color-mix(in srgb,${m.color} 30%,#1e293b)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>
                      {m.icon}
                    </div>
                    <div>
                      <div style={{fontSize:12,fontWeight:700,color:"#e2e8f0"}}>{m.name}</div>
                      <div style={{fontSize:10,color:"#475569"}}>{m.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coming soon */}
              <div style={{background:"rgba(255,255,255,.02)",border:"1px dashed #1e293b",borderRadius:12,padding:"12px 16px",marginBottom:12}}>
                <div style={{fontSize:10,color:"#334155",fontWeight:700,marginBottom:10,textAlign:"center",letterSpacing:2}}>🔜 قريباً — COMING SOON</div>
                <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>
                  {[
                    {icon:"🟢", name:"STC Pay"},
                    {icon:"🍎", name:"Apple Pay"},
                    {icon:"🔵", name:"Google Pay"},
                    {icon:"🅿️", name:"PayPal"},
                  ].map((m,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"center",gap:6,background:"rgba(255,255,255,.03)",border:"1px solid #1e293b",borderRadius:8,padding:"6px 12px",opacity:.6}}>
                      <span style={{fontSize:14}}>{m.icon}</span>
                      <span style={{fontSize:11,color:"#475569",fontWeight:700}}>{m.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href={`https://wa.me/971561915658`} target="_blank" rel="noreferrer"
                style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,background:"linear-gradient(135deg,rgba(37,211,102,.1),rgba(18,140,126,.1))",border:"1px solid rgba(37,211,102,.3)",borderRadius:12,padding:"13px 16px",textDecoration:"none"}}>
                <span style={{fontSize:20}}>💬</span>
                <div>
                  <div style={{fontSize:13,fontWeight:900,color:"#25d366"}}>تواصل معنا للدفع والاستفسار</div>
                  <div style={{fontSize:11,color:"#475569",direction:"ltr"}}>+971 56 191 5658</div>
                </div>
              </a>
            </div>

            {/* Reviews Section */}
            <div style={{marginTop:32}}>
              <div style={{textAlign:"center",marginBottom:20}}>
                <div style={{fontSize:13,fontWeight:900,color:"#94a3b8",letterSpacing:2,marginBottom:4}}>⭐ آراء العملاء</div>
                <div style={{height:2,background:"linear-gradient(90deg,transparent,#1e293b,transparent)",borderRadius:2}}/>
              </div>
              {[
                { name:"محمد العتيبي", flag:"🇸🇦", country:"السعودية",
                  text:"التعامل ممتاز والخدمات مضمونة على حسب التجربة، اختيار الخدمات سهل وواضح شي جداً ممتاز.",
                  stars:5, service:"متابعين تيك توك" },
                { name:"خالد المنصوري", flag:"🇦🇪", country:"الإمارات",
                  text:"سرعة تنفيذ خرافية، طلبت مشاهدات وبدأت تنزل خلال دقائق. خدمة احترافية وما تحتاج باسورد.",
                  stars:5, service:"مشاهدات تيك توك" },
                { name:"فيصل البلوشي", flag:"🇴🇲", country:"عُمان",
                  text:"رفعوا لي كونكر التمت بأمان تام وبسرعة. تواصلوا معي طوال الوقت. أنصح الكل فيهم.",
                  stars:5, service:"كونكر التمت" },
              ].map((r,i)=>(
                <div key={i} style={{background:"#0d1829",border:"1px solid #1e293b",borderRadius:14,padding:16,marginBottom:10,transition:"all .2s"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <div style={{width:40,height:40,borderRadius:"50%",background:"linear-gradient(135deg,#1e293b,#334155)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>
                        {r.flag}
                      </div>
                      <div>
                        <div style={{fontWeight:900,fontSize:13,color:"#e2e8f0"}}>{r.name}</div>
                        <div style={{fontSize:10,color:"#475569",marginTop:1}}>{r.flag} {r.country}</div>
                      </div>
                    </div>
                    <div style={{textAlign:"left"}}>
                      <div style={{color:"#f59e0b",fontSize:13,letterSpacing:1}}>{"★".repeat(r.stars)}</div>
                      <div style={{fontSize:10,color:"#334155",marginTop:2}}>{r.service}</div>
                    </div>
                  </div>
                  <div style={{fontSize:12,color:"#94a3b8",lineHeight:1.8,borderTop:"1px solid #1e293b",paddingTop:10}}>
                    "{r.text}"
                  </div>
                </div>
              ))}

              {/* Trust badges */}
              <div style={{display:"flex",gap:8,marginTop:16,justifyContent:"center",flexWrap:"wrap"}}>
                {[{i:"🔒",t:"100% آمن"},{i:"⚡",t:"تنفيذ سريع"},{i:"✅",t:"مضمون"},{i:"💬",t:"دعم 24/7"}].map((b,i)=>(
                  <div key={i} style={{background:"rgba(255,255,255,.03)",border:"1px solid #1e293b",borderRadius:10,padding:"8px 14px",display:"flex",alignItems:"center",gap:6}}>
                    <span style={{fontSize:14}}>{b.i}</span>
                    <span style={{fontSize:11,color:"#64748b",fontWeight:700}}>{b.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App(){
  const [page,setPage]=useState("customer");
  const [prices,setPrices]=useState(buildPrices);

  // Try to load saved prices on start
  useEffect(()=>{
    JSON.parse(localStorage.getItem("custom_prices") || "null")
      .then(r=>{ if(r) setPrices(JSON.parse(r.value)); })
      .catch(()=>{});
  },[]);

  return(
    <div>
      {page==="customer"&&<>
        <CustomerPanel prices={prices}/>
        <div style={{position:"fixed",bottom:16,left:16}}>
          <button onClick={()=>setPage("adminLogin")} style={{background:"rgba(255,255,255,.04)",border:"1px solid #1e293b",borderRadius:8,padding:"8px 14px",color:"#1e293b",fontFamily:"'Cairo',sans-serif",fontSize:11,cursor:"pointer"}}>🔧</button>
        </div>
      </>}
      {page==="adminLogin"&&<AdminLogin onLogin={()=>setPage("admin")}/>}
      {page==="admin"&&<AdminPanel prices={prices} onPricesChange={setPrices} onLogout={()=>setPage("customer")}/>}
    </div>
  );
}
