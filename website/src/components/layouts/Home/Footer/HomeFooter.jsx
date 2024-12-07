import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function HomeFooter() {
    return (
        <Grid
            container
            columnSpacing={0.5}
            className="appContainer__homeFooter"
            sx={{
                // marginTop: "48px",
                width: "100%",
                margin: "48px auto 0 auto",
                padding: "24px 12px 36px",
                backgroundColor: "#fff",
                "& p": {
                    padding: "6px 0",
                    fontSize: "13px",
                    "&:hover": {
                        textDecoration: "underline",
                    },
                },
            }}
        >
            <Grid xs={3} item>
                <h4>Support customer</h4>
                <p style={{ marginTop: "12px" }}>
                    <Link href={""}>Hotline: 19001009</Link>
                </p>
                <p>
                    {" "}
                    <Link href={""}>Question</Link>
                </p>
                <p>
                    {" "}
                    <Link href={""}>Buy product</Link>
                </p>
                <p>
                    {" "}
                    <Link href={""}>Shipping method</Link>
                </p>
                <p>
                    {" "}
                    <Link href={""}>Shipping method </Link>
                </p>
            </Grid>
            <Grid xs={3} item>
                <h4>About</h4>
                <p style={{ marginTop: "12px" }}>
                    {" "}
                    <Link href={""}>About us</Link>
                </p>
                <p>
                    {" "}
                    <Link href={""}>Bai viet</Link>
                </p>
                <p>
                    {" "}
                    <Link href={""}>Career</Link>
                </p>
                <p>
                    {" "}
                    <Link href={""}>Agreemennt</Link>
                </p>
                <p>
                    {" "}
                    <Link href={""}>Requirement</Link>
                </p>
            </Grid>
            <Grid xs={3} item>
                <h4>Support</h4>
                <p style={{ marginTop: "12px" }}>
                    {" "}
                    <Link href={""}>Requirement</Link>
                </p>
                <p>
                    {" "}
                    <Link href={""}>Seller</Link>
                </p>
            </Grid>
            <Grid xs={3} item>
                <h4>Connect us</h4>
            </Grid>
        </Grid>
    );
}
