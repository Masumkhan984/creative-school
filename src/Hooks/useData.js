import React, { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Masumkhan984/fackData/main/school.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return [data, setData]
}

export default useData;