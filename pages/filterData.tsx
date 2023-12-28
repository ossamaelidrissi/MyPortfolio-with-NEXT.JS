import Item from '@/components/Item';
import React, { useEffect, useMemo, useState } from 'react'

export default function filterData() {

    const [sportList, setSportList] = useState<any>([]);

    const [selectedCategory, setSelectedCategory] = useState<any>();
    const [selectedPrice, setSelectedPrice] = useState<number>(50);
    const [productsuggestionSelected, setProductsuggestionSelected] = useState<any>([])
    const [suggestion, setSuggestion] = useState([]);


    var defaultSports = [
        { name: "Table Tennis", category: "Indoor" , price : 34 },
        { name: "Football", category: "Outdoor" , price : 24 },
        { name: "Swimming", category: "Aquatics" , price : 14 },
        { name: "Chess", category: "Indoor" , price : 4 },
        { name: "BaseBall", category: "Outdoor" , price : 9 }
    ];

    useEffect(() => {
        setSportList(defaultSports);
    }, []);

    function handleCategoryChange(event: any) {
        setSelectedCategory(event.target.value);
     }

     function handleCategoriesBtns(category: string) {
        setSelectedCategory(category);
     }
       // Function to get filtered list
    function getFilteredList() {
        // Avoid filter when selectedCategory is null

        console.log(selectedPrice)
        if (!selectedCategory) {
        return sportList;
        }
        return sportList.filter((item: any) => item.category === selectedCategory && item.price === selectedPrice);
    };

    const handlePriceChange = (e : any) => {
        setSelectedPrice(e.target.value);
    }

    // Avoid duplicate function calls with useMemo
    var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

    const categories = ['All' , 'Outdoor' , 'Indoor' , 'Aquatics'];

     
  return (
    <div className='bg-black h-screen' >
        <div className="filter-container">
            <div>Filter by Category:</div>
            <div className="app">
            <div className="filter-container">
                <div>Filter by Category:</div>
                <div className='flex items-center space-x-3' >
                    <input type="text" onChange={ (e: any) => {
                            setSuggestion(e.target.value);
                            setProductsuggestionSelected(e.target.value);
                          }}
                          value={productsuggestionSelected} />
                    <select
                        name="category-list"
                        id="category-list"
                        onChange={handleCategoryChange}
                    >
                        <option value="">All</option>
                        <option value="Outdoor">Outdoor</option>
                        <option value="Indoor">Indoor</option>
                        <option value="Aquatics">Aquatics</option>
                    </select>

                    <div className='text-white flex items-center space-x-2' >
                        {
                            categories.map(category => (
                                <button className={`${ selectedCategory == category && 'bg-red-500' } rounded py-1 px-2 duration-300`} onClick={() => handleCategoriesBtns(category)}>{category}</button>
                            ))
                        }
                    </div>

                    <input onChange={handlePriceChange} type="range" name="" id="" /> <p className='text-white' >{ selectedPrice }</p> 
                </div>
            </div>
            <div className="sport-list text-white">
                {filteredList.filter((val: any) => {
                        if (suggestion.length === 0) {
                            return val;
                        } else if (
                            val.name
                            .toString()
                            .toLowerCase()
                            .includes(suggestion.toString().toLowerCase())
                        ) {
                            return val;
                        }
                        }).map((element: any, index: number) => (
                <Item {...element} key={index} />
                ))}
            </div>
            </div>

        </div>
    </div>
  )
}
