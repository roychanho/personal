import React, { useState, useContext, useEffect, useMemo, useRef } from "react";
import Select from "react-select";
import classNames from "classnames";
import Item from "../../components/Item";
import Search from "../../components/Search";
import { initialDetails, dataList, homeList, testList } from "../../constants/initialDetails";
// import useFetch from "use-http";
import _ from "lodash";

const Home = () => {
  //   let [data, setData] = useState(["all"]);
  let [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState();
  let [data2, setData2] = useState([]);
  const [currentItem2, setCurrentItem2] = useState();
  const ref = useRef(null);

  const changeItem = (e) => {
    setCurrentItem(e.target.value);
  };

  const changeItem2 = (e) => {
    setCurrentItem2(e.target.value);
  };

  useEffect(() => {
    data2 = dataList.filter((dataList) => {
      if (currentItem2 === "available") {
        return dataList.isAvailable === true;
      } else if (currentItem2 === "unavailable") {
        return dataList.isAvailable === false;
      } else {
        return dataList;
      }
    });
    setData2(data2);
    // const entries = (await get("/getUser?" + lastActivityId)) || {};
  }, [currentItem2]);

  useEffect(() => {
    setData(dataList);
  }, []);

  useEffect(() => {
    // const el2 = ref.current.id;
    // console.log(el2);
    // document.querySelectorAll('#CollectionFiltersForm .sf__accordion-content input[type=checkbox]').forEach((el) => {
    //     el.addEventListener('change', function() {
    //       order();
    //    });
    // });
    // window.addEventListener("load", (event) => {
    //     order();
    // });
  }, []);

  const getFilteredList = () => {
    if (!currentItem || currentItem == "all") {
      return data;
    }
    return data.filter((item) => item.name === currentItem);
  };

  const order = () => {
    let array = [];
    let filter = [];
    let weights = {
      XXXS: 0,
      XXS: 1,
      XS: 2,
      S: 3,
      M: 4,
      L: 5,
      XL: 6,
      XXL: 7,
    };
    for (var n in weights) {
      filter.push(n);
    }

    document.querySelectorAll("#Size li label span").forEach((el) => {
      array.push(el.textContent);
      array.sort((a, b) => weights[a] - weights[b]);
    });

    document.querySelectorAll("#Size li label span").forEach((el, i) => {
      el.textContent = array[i];
    });

    removeOrder = array.filter((item) => !filter.includes(item));
    let sizeList = document.querySelectorAll("#Size li");
    for (const v of sizeList) {
      var data = v.getAttribute("data-item");
      if (removeOrder.includes(data)) {
        document.querySelector(`[data-item="${data}"]`).style.display = "none";
      }
    }
  };

  const testJSX = _.map(testList, (item, index) => {
    const { id, name } = item;
    return (
      <div className={name} id={name} key={id} ref={ref}>
        {name}
      </div>
    );
  });

  const homeJSX = _.map(homeList.badges, (item, index) => {
    const { id, name } = item;
    return <div key={id + 1}>{id}</div>;
  });

  const filterJSX = useMemo(() => {
    return (
      <div>
        <select name="isAvailable" onChange={changeItem2}>
          <option value="all">All</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>
    );
  });

  const filterStringJSX = useMemo(() => {
    return (
      <div>
        <select name="isAvailable" onChange={changeItem}>
          <option value="all">All</option>
          <option value="Mike">Mike</option>
          <option value="Steve">Steve</option>
        </select>
      </div>
    );
  });

  var filteredList = useMemo(getFilteredList, [currentItem, data]);

  // const SearchInput = useMemo(
  //   () => (
  //     <input onChange={changeText} value={searchText} placeholder="search..." />
  //   ),
  //   [searchText]
  // );

  return (
    <div id="Content" className="grid-auto relative row-start-2 overflow-auto">
      <div className="grid grid-flow-row grid-cols-2">
        {testJSX}
        {homeJSX}
      </div>
      <div className="grid grid-flow-row grid-cols-2 bg-black">
        {filterJSX}
        {data2.map(({ id, name, city, label, isAvailable }) => {
          return (
            <>
              <div>{id}</div>
              <div>{name}</div>
              <div>{city}</div>
              <div>{label}</div>
            </>
          );
        })}
      </div>
      <div className="grid grid-flow-row grid-cols-2 bg-white">
        {filterStringJSX}
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div>
      <div className="grid grid-flow-row grid-cols-2">
        <Search details={initialDetails} />
      </div>
    </div>
  );
};

export default Home;
