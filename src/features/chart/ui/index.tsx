import Image from "next/image";
import ChartPng from '@/features/chart/ui/chart.png'

export default function Chart() {
    return (
        <div className="pt-24 flex flex-col justify-center items-center bg-hero-clouds">
            <h3 className="uppercase text-xs text-[#3D4F9F] leading-3 font-semibold pb-4">plan your life</h3>
            <h2 className="text-5xl leading-[60px] font-light text-[#3D4F9F] pb-6">Increase your <strong className="font-[600]">productivity</strong></h2>
            <p className="w-[480px] text-center font-medium text-[15px] leading-7 text-[#939cc5]">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>
            <Image className="w-screen absolute bottom-[162px] border-b-2 border-[#D8E3FE]" src={ChartPng} alt="Image" />
        </div>
    )
}

