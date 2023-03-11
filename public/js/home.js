
let item_count=0;

const text_box=document.getElementById('news')
console.log(text_box)

var data=[
    "বিদেশ হতে ছুটি কাটাতে দেশে আসা কর্মীদের অনলাইন রেজিস্ট্রেশন সংক্রান্ত ‘বিজ্ঞপ্তি’ (২০২০-১০-০৬)",
    "ঢাকা জেলার বিদেশ গমনেচ্ছুু কর্মীদের নিবন্ধনের জন্য বিজ্ঞপ্তি (২০১৯-০৭-২৬)",
    "১৮ ডিসেম্বর ২০২২ তারিখে ওসমানী স্মৃতি মিলনায়তনে ”আন্তর্জাতিক অভিবাসী দিবস ২০২২” উদযাপন (২০২২-১২-১৯)"
]
setInterval(()=>{
    if(item_count==3){
        item_count=0;
    }else{
        text_box.innerHTML=data[item_count];
        item_count++;
    }
},5000)