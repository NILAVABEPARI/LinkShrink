import { UAParser } from "ua-parser-js";
import supabase from "./supabase";

export async function getTotalClicksForUrls(urlIds) {
    try {
        const { data, error } = await supabase.from("clicks").select("*").in("url_id", urlIds);
        if (error) {
            console.error("Error fetching total clicks -- ", error);
            throw new Error('Unable to load Clicks -- ', error.message);
        }
        return data;
    } catch (error) {
        console.error("Error in getTotalClicksForUrls -- ", error);
        throw error;
    }
}

export async function getClicksForUrl(url_id) {
    try {
        const { data, error } = await supabase.from("clicks").select("*").eq("url_id", url_id);
        if (error) {
            console.error("Error fetching clicks for particular url -- ", error);
            throw new Error("Unable to load Stats");
        }
        return data;
    } catch (error) {
        console.error("Error in getClicksForUrl -- ", error);
        throw error;
    }
}

const parser = new UAParser();

export const storeClicks = async ({ id, originalUrl }) => {
    try {
        const res = parser.getResult();
        const device = res.type || "desktop"; // Default to desktop if type is not detected

        const response = await fetch("https://ipapi.co/json");
        const { city, country_name: country } = await response.json();

        // Record the click
        await supabase.from("clicks").insert({
            url_id: id,
            city: city,
            country: country,
            device: device,
        });

        // Redirect to the original URL
        window.location.href = originalUrl;
    } catch (error) {
        console.error("Error recording click:", error);
    }
};

