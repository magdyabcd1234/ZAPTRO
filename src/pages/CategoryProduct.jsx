// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios';
// import Loading from "../assets/Loading4.webm"
// import { ChevronLeft } from 'lucide-react';

// const CategoryProduct = () => {
//     const [searchData, setSearchData] = useState([])
//     const params = useParams()
//     const category = params.category
//     console.log(category);


//     const getFilterData = async () => {
//         try {
//             const res = await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`)
//             const data = res.data.category
//             setSearchData(data)
//         } catch (error) {
//             console.log(error)
//         }
//     }


//     useEffect(()=> {
//         getFilterData()
//     },[])

//   return (
//     <div>
//         {
//             searchData.length > 0 ? (
//                 <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
//                     <button className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'><ChevronLeft/> Back</button>     
//                 </div>
//             ) : (
//                 <div className='flex items-center justify-center h-[400px]'>
//                     <video muted autoPlay loop>
//                         <source src={Loading} type='video/webm'/>
//                     </video>
//                 </div>
//             )
//         }
//     </div>
//   )
// }

// export default CategoryProduct














import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from "../assets/Loading4.webm";
import { ChevronLeft } from 'lucide-react';
import ProductListView from '../components/ProductListView';

const CategoryProduct = () => {
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(true);  // حالة التحميل
    const [error, setError] = useState(null);  // حالة الخطأ
    const params = useParams();
    const category = params.category;
    const navigate = useNavigate()

    console.log("Category:", category); // اطبع قيمة الـ category للتأكد أنها موجودة

    useEffect(() => {
        if (category) {  // التأكد أن الـ category ليس فارغًا
            setLoading(true);  // بدأ تحميل البيانات
            setError(null);  // مسح الأخطاء السابقة

            const getFilterData = async () => {
                try {
                    // استخدم رابط DummyJSON API الجديد
                    const res = await axios.get(`https://dummyjson.com/products?limit=150`);
                    const data = res.data.products;  // البيانات الجاية من API
                    console.log("API Response: ", data);  // شوف البيانات الجاية من الـ API
                    
                    // إذا كنت بحاجة لتصفية البيانات حسب الـ category
                    const filteredData = data.filter(product => product.category.toLowerCase() === category.toLowerCase());
                    
                    setSearchData(filteredData);  // حفظ البيانات المفلترة في الحالة
                } catch (error) {
                    console.log("Error fetching data:", error);
                    setError("Error fetching data");
                } finally {
                    setLoading(false);  // انتهى تحميل البيانات
                }
            };

            getFilterData();  // استدعاء الدالة لتحميل البيانات
            window.scrollTo(0,0)
        } else {
            setError("Category not found");
            setLoading(false);
        }
    }, [category]);  // التأكد من أن الـ category هو اللي بيتغير عند كل تحديث

    return (
        <div>
            {loading ? (
                <div className='flex items-center justify-center h-[400px]'>
                    <video muted autoPlay loop>
                        <source src={Loading} type='video/webm'/>
                    </video>
                </div>
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>  // عرض رسالة الخطأ لو في مشكلة
            ) : searchData.length > 0 ? (
                <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
                    <button onClick={()=>navigate('/')} className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'>
                        <ChevronLeft/> Back
                    </button> 

                        {
                            searchData.map((product, index) => {
                                return <ProductListView key={index} product={product}/>
                            })
                        }   

                </div>
            ) : (
                <div className="text-center text-gray-500">No products available in this category</div>  // عرض رسالة لو مفيش منتجات
            )}
        </div>
    );
};

export default CategoryProduct;






















































































































































