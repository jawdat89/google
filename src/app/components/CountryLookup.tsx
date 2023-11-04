"use client";
import React, { useEffect, useState } from "react";

const api_key = process.env.NEXT_PUBLIC_IP_LOOKUP_API_KEY;

export default function CountryLookup() {
  useEffect(() => {
    fetch(`http://extreme-ip-lookup.com/json/?key=${api_key}`).then((res) => {
      res.json().then((data) => {
        setCountry(data.country);
      });
    });
  }, []);

  const [country, setCountry] = useState<string>("United States");
  return <div>{country}</div>;
}
