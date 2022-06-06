import { FQl_dynamic_blogPost_IBlogPost, FQl_dynamic_user_Gender, FQl_dynamic_user_Level} from 'state/declarations/schema/schema';
import { v4 } from 'uuid';

export const BLOG_SLIDES_ARTICLE : FQl_dynamic_blogPost_IBlogPost[] = [
  {
    _id:v4() ,
    content: "",
    summary:"",
    title: 'بررسی مانیتور گیمینگ؛ بهترین مانیتور اقتصادی برای گیمرها',
    createdAt: new Date(1653488788887),
    photo:{filename:'../../png/Blog/1.png',
    _id: "",
    size:0,
    type:""},
    author:{_id:'', creditCardNumber:0, gender: FQl_dynamic_user_Gender.Male, lastName:'', level:[FQl_dynamic_user_Level.Admin], name:'', phone:0, postalCode:'', profilePicture:{_id:'',filename:'',size:0, type:''} 
  },
  blogCategory:{_id:'', enName:'', name:''}
 },
  { 
    _id:v4() ,
    content: "",
    summary:"",
    title: 'شیائومی گوشی جدید رونمایی کرد',
    createdAt: new Date(),
    photo:{filename:'../../png/Blog/2.png',
    _id: "",
    size:0,
    type:""},
    author:{_id:'', creditCardNumber:0, gender: FQl_dynamic_user_Gender.Male, lastName:'', level:[FQl_dynamic_user_Level.Admin], name:'', phone:0, postalCode:'', profilePicture:{_id:'',filename:'',size:0, type:''} 
    },
    blogCategory:{_id:'', enName:'', name:''}
    
  },

  { 
    _id:v4() ,
    content: "",
    summary:"",
    title: 'فیسبوک نام خود را تغییر داد',
    createdAt: new Date(),
    photo:{filename:'../../png/Blog/3.png',
    _id: "",
    size:0,
    type:""},
    author:{_id:'', creditCardNumber:0, gender: FQl_dynamic_user_Gender.Male, lastName:'', level:[FQl_dynamic_user_Level.Admin], name:'', phone:0, postalCode:'', profilePicture:{_id:'',filename:'',size:0, type:''} 
  },
  blogCategory:{_id:'', enName:'', name:''}
  },

  {
    _id:v4() ,
    content: "",
    summary:"",
    title: 'راهنمای خرید لپتاپ',
    createdAt: new Date(),
    photo:{filename:'../../png/Blog/4.png',
    _id: "",
    size:0,
    type:""},
    author:{_id:'', creditCardNumber:0, gender: FQl_dynamic_user_Gender.Male, lastName:'', level:[FQl_dynamic_user_Level.Admin], name:'', phone:0, postalCode:'', profilePicture:{_id:'',filename:'',size:0, type:''} 
  },
  blogCategory:{_id:'', enName:'', name:''}
  },

  {
    _id:v4() ,
    content: "",
    summary:"",
    title: 'گوگل چگونه رشد کرد؟',
    createdAt: new Date(),
    photo:{filename:'../../png/Blog/5.png',
    _id: "",
    size:0,
    type:""},
    author:{_id:'', creditCardNumber:0, gender: FQl_dynamic_user_Gender.Male, lastName:'', level:[FQl_dynamic_user_Level.Admin], name:'', phone:0, postalCode:'', profilePicture:{_id:'',filename:'',size:0, type:''} 
  },
  blogCategory:{_id:'', enName:'', name:''}
  },
];
