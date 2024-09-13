import supabase from "./supabase";

export async function getClicksForUrls(urlIds) {
    const { data, error } = await supabase.from("urls").select("*").in("url_id", urlIds);
    if (!session.session) { return null; }
    if (error) {
        console.log(error.message);
        throw new Error('unable to load Clicks');
    }
    return data;
}