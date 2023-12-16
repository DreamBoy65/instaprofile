export default function InstaSidebar() {
    return <div className=" flex flex-col w-[16%] h-full border-[#26282b] border-r">
        <div className="w-full h-[10%] flex items-center justify-center">Instagram</div>
        <div className="w-full h-[70%] flex flex-col justify-evenly items-center text-md">
            <div>Home</div>
            <div>Search</div>
            <div>Explore</div>
            <div>Reels</div>
            <div>Messages</div>
            <div>Notifications</div>
            <div>Create</div>
            <div>Profile</div>
        </div>
        <div className="w-full h-[20%] flex flex-col justify-evenly items-center text-lg pt-[20px] ">
            <div>Threads</div>
            <div>More</div>
        </div>
    </div>
}