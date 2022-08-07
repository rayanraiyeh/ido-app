
import React, { useEffect, useState } from "react";
import "./style-todo.css";
import Card from "../card/card";
import axios from "axios";
import Header from "../header/header";
import TodoIcon from "../../../asssets/images/ToDoIcon.svg"
import DoingIcon from "../../../asssets/images/DoingIcon.svg"
import DoneIcon from "../../../asssets/images/DoneIcon.svg"

import { useLocation } from 'react-router-dom';



export default function Todo(props) {

  const groups = [
    { label: "ToDo", icon: TodoIcon, color: "#8E7AD2" },
    { label: "Doing", icon: DoingIcon, color: "#FE913E" },
    { label: "Done", icon: DoneIcon, color: "#39AC95" },
  ];    // Initial items to be dragged
 
  let todoList = [
    {
        "id": 1,
        "category": "Education",
        "label": "Prepare the assay",
        "groupe": "ToDo",
        "dueDate": "12/12/2022",
        "importance": "High",
        "estimate": "6 hours"
    },
    {
        "id": 2,
        "category": "General cleanup",
        "label": "Format the PC",
        "groupe": "ToDo",
        "dueDate": "12/10/2022",
        "importance": "Low",
        "estimate": "3 hours"
    },
    {
        "id": 3,
        "category": "Follow Up",
        "label": "Conatct the support team of XYZ software to ask about the guarantee pricing",
        "groupe": "ToDo",
        "dueDate": "01/01/2022",
        "importance": "Medium",
        "estimate": "0.5 hours"
    },
    {
        "id": 4,
        "category": "Job Opportunity",
        "label": "Translate the resume",
        "groupe": "Doing",
        "dueDate": "10/10/2022",
        "importance": "Low",
        "estimate": "2 hours"
    },
    {
        "id": 5,
        "category": "House improvemment",
        "label": "Fix the power button of the TV",
        "groupe": "Doing",
        "dueDate": "null",
        "importance": "Medium",
        "estimate": "1 hours"
    },
    {
        "id": 6,
        "category": "Final Year Project",
        "label": "Prepare the XD design",
        "groupe": "Done",
        "dueDate": "01/01/2022",
        "importance": "High",
        "estimate": "8 days"
    },
    {
        "id": 7,
        "category": "Final Year Project",
        "label": "Email the faculty director about progress",
        "groupe": "Done",
        "dueDate": "null",
        "importance": "null",
        "estimate": "15 minutes"
    }
];
 
  const [items, setItems] = useState(todoList);
  const [checkResult, setCheckResult] = useState(false);
  const [dragData, setDragData] = useState({});
  const [valueSearch, setValueSearch] = useState("");
  const { state } = useLocation();
  const { email } = state;

  const getListCards = () => {
    setCheckResult(true)
    var config = {
      method: 'get',
      url: 'http://localhost:5013/cards',
      headers: {}
    };
    axios(config)
      .then(function (response) {
        console.log("responce.data", response.data);
        setItems(response.data)

      })
      .catch(function (error) {
        console.log("responce.data error", error);
      });
  }

  useEffect(() => {
    if (!checkResult) {

      getListCards()

    }
  }, [checkResult]); // eslint-disable-line

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      groupe: "ToDo",
      label: "jdide",
      category: "ToDo",
      dueDate: "#8E7AD2",
      estimate: "",
      importance: ""
    };
    const newItems = [...items, newItem];
    setItems(newItems);

  };

  const handleDragStart = (e, id, group) => {
    setDragData({ id: id, initialGroup: group.label });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const changeCategory = (itemId, groupe) => {
    const newItems = [...items];
    newItems[itemId - 1].groupe = groupe;
    setItems([...newItems]);
  };

  const handleDrop = (e, groupe) => {
    const selected = dragData.id;
    changeCategory(selected, groupe);

  };
  
  return (
    <>
      <Header
        addItem={addItem}
        groups={groups}
        email={email}
        setValueSearch={setValueSearch}
      />
      <div style={{ color: "#F4F7FC", }}>
        <div className="groups">
          {groups.map((groupe) => (
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, groupe.label)}
              key={groupe.label}
              className="group"
            >
              <div style={{ width: "100%", marginBottom: "-17px" }} />
              <div>
                {items
                  .filter((item) => item.groupe === groupe.label)
                  .map((item, i) => (
                    <div
                      key={item.id}
                      id={item.id}
                      className="item"
                      draggable
                      onDragStart={(e) => handleDragStart(e, item.id, item.groupe)}
                    >
                      <Card
                        label={item.label}
                        category={item.category}
                        dueDate={item.dueDate}
                        estimate={item.estimate}
                        importance={item.importance}
                        backgroundColor={valueSearch && item.label.toLowerCase().trim().includes(valueSearch.toLowerCase().trim()) ? '#ADE5F7' : '#ffffff'}

                      />
                    </div>
                  )
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


