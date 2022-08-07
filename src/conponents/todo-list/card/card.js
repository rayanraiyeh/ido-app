
import { Paper, Typography } from "@mui/material";

import React from "react";
import "./card.css"

export default function Card(props) {

    const {
        label,
        category,
        dueDate,
        estimate,
        importance,
        backgroundColor

    } = props;

    return (
        <div>
            <Paper

                sx={{
                    top: "170px",
                    left: "487px",
                    width: "393px",
                    height: "213px",
                    boxShadow: " 0px 3px 6px #00000029",
                    borderRadius: "6px",
                    padding: "15px",
                    cursor: "default",
                    textAlign: "left",
                    background: backgroundColor ? backgroundColor : "white"

                }}
            >
                <Typography className="Label">
                    {label}
                </Typography>

                <div style={{ display: "flex", justifyContent: "space-between", width: "80%", marginBottom: "10px" }}>
                    <Typography className="Category-label">
                        Category
                    </Typography>
                    <Typography className="Category">
                        {category}
                    </Typography>

                </div>

                <div style={{ display: "flex", justifyContent: "space-between", textAlign: "left", width: "55%", marginBottom: "10px" }}>
                    <Typography className="Due-date-label">
                        Due Date
                    </Typography>
                    <Typography className="Due-date">
                        {dueDate}
                    </Typography>

                </div>

                <div style={{ display: "flex", justifyContent: "space-between", textAlign: "left", width: "55%", marginBottom: "10px" }}>
                    <Typography className="Estimate-label">
                        Estimate
                    </Typography>
                    <Typography className="Estimate">
                        {estimate}
                    </Typography>

                </div>

                <div style={{ display: "flex", justifyContent: "space-between", textAlign: "left", width: "55%", marginBottom: "10px" }}>
                    <Typography className="Importance-label">
                        Importance
                    </Typography>
                    <Typography style={{ background: importance === "Medium" ? "#FE913E" : importance === "Low" ? "#39AC95" : importance === "High" ? "#DC3545" : "" }} className="Importance">
                        {importance}
                    </Typography>

                </div>

            </Paper>
        </div>
    );
}
