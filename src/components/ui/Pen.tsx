export default function Pen() {
    return (
        <div className="relative flex flex-col rotate-20 bg-black w-6 h-70 rounded-b-3xl">
            <div className="relative border-4 border-r-[#b68f23] w-3 h-30 -right-5"></div>
            <div className="border-2 border-[#b68f23] w-6"></div>
            <div className="absolute  border-[#b68f23] -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[30px] border-l-transparent border-r-transparent">
                <div className="absolute -top-[17px] rounded-t-full left-1/2 transform -translate-x-1/2 w-[0.8px] h-4 bg-black"></div>
                <div className="absolute -top-[18px] left-1/2 transform -translate-x-1/2 w-[4px] h-[4px] rounded-full bg-black"></div>   
            </div>
        </div>  

    );
}