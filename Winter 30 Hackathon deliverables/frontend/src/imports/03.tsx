import svgPaths from "./svg-xzlg31fuob";
import clsx from "clsx";

function Wrapper10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#2c2c2c] relative rounded-[8px] shrink-0">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Wrapper9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Frame({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[40px]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#49454f] text-[16px] tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {children}
      </p>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(73, 69, 79, 1)" } as React.CSSProperties}>
        {children}
      </div>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={clsx("h-[32px] relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] py-0 relative rounded-[inherit]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">{children}</div>
    </div>
  );
}

function AudioRow({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <Wrapper3>{children}</Wrapper3>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function StateLayer({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex gap-[4px] items-start pl-[16px] pr-0 py-[4px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <g id="Folder">{children}</g>
    </Wrapper4>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <g id="Chevron Down">{children}</g>
    </Wrapper4>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start px-[12px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type BtnEditTextProps = {
  text: string;
};

function BtnEditText({ text }: BtnEditTextProps) {
  return (
    <Wrapper5>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111827] text-[13px] text-nowrap">{text}</p>
    </Wrapper5>
  );
}

function BtnVolumeUp() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 size-[44px]">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Wrapper6>
          <g id="Speaker">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.pdcfe80} fill="var(--fill-0, #111827)" fillRule="evenodd" />
              <path d={svgPaths.p27f180} fill="var(--fill-0, #111827)" />
              <path d={svgPaths.p23ee0c00} fill="var(--fill-0, #111827)" />
            </g>
          </g>
        </Wrapper6>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Helper() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Play() {
  return (
    <div className="h-[20px] relative shrink-0 w-[21px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Play">
          <path clipRule="evenodd" d={svgPaths.p33770d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}
type MetaProps = {
  text: string;
  text1: string;
};

function Meta({ text, text1 }: MetaProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic overflow-clip relative shrink-0 text-[14px]">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#111827] w-full">{text}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6b7280] w-full">{text1}</p>
    </div>
  );
}

function ActiveIndicator1() {
  return (
    <Wrapper7>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230.75 1">
        <line id="Active indicator" stroke="var(--stroke-0, #49454F)" x2="230.75" y1="0.5" y2="0.5" />
      </svg>
    </Wrapper7>
  );
}
type LabelTextContainerTextProps = {
  text: string;
};

function LabelTextContainerText({ text }: LabelTextContainerTextProps) {
  return <Wrapper8>{text}</Wrapper8>;
}

function ActiveIndicator() {
  return (
    <Wrapper7>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 477.5 1">
        <line id="Active indicator" stroke="var(--stroke-0, #49454F)" x2="477.5" y1="0.5" y2="0.5" />
      </svg>
    </Wrapper7>
  );
}

function Icon() {
  return (
    <Wrapper6>
      <g id="Icon">
        <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #49454F)" id="icon" />
      </g>
    </Wrapper6>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#49454f] text-[14px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text}
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}
type AudioItemTextProps = {
  text: string;
};

function AudioItemText({ text }: AudioItemTextProps) {
  return (
    <Wrapper additionalClassNames="rounded-[6px]">
      <Wrapper4>
        <g clipPath="url(#clip0_1_3825)" id="Image-file">
          <path d={svgPaths.p2aa84200} fill="var(--fill-0, #666666)" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_3825">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </Wrapper4>
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#666] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </Wrapper>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[12px] items-start px-[12px] relative w-full", additionalClassNames)}>
      <Wrapper2>
        <path clipRule="evenodd" d={svgPaths.p21d4df80} fill="var(--fill-0, #666666)" fillRule="evenodd" id="Icon" />
      </Wrapper2>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#666] text-[14px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <Wrapper1>
        <path clipRule="evenodd" d={svgPaths.p3ae30b00} fill="var(--fill-0, #666666)" fillRule="evenodd" id="Icon" />
      </Wrapper1>
    </div>
  );
}

function BtnBold() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center overflow-clip px-[12px] py-0 relative rounded-[8px] shrink-0 w-[34px]" data-name="btn-bold">
      <Wrapper6>
        <g id="ic:round-navigate-next">
          <path d={svgPaths.p1c1d2980} fill="var(--fill-0, #646464)" id="Vector" />
        </g>
      </Wrapper6>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="03">
      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
        <div className="bg-[#b4d0ff] content-stretch flex items-start px-[24px] py-[10px] relative shrink-0 w-[1280px]">
          <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
            <Frame>
              <Wrapper4>
                <g id="Microphone">
                  <path clipRule="evenodd" d={svgPaths.p31bd7980} fill="var(--fill-0, #666666)" fillRule="evenodd" id="Icon" />
                </g>
              </Wrapper4>
            </Frame>
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative shrink-0 text-black text-nowrap" data-name="Frame">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[24px]">Podgen</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[16px]">Generate a podcast from any text material</p>
            </div>
          </div>
        </div>
        <div className="basis-0 bg-[#f9f9f9] content-stretch flex gap-[12px] grow items-start min-h-px min-w-px p-[24px] relative shrink-0 w-[1280px]">
          <div className="content-stretch flex h-full items-start overflow-clip relative rounded-[16px] shrink-0 w-[189px]" data-name="Frame">
            <div className="basis-0 bg-[rgba(180,208,255,0.25)] grow h-full min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Frame">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start px-[12px] py-[24px] relative size-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="project-item">
                            <div className="content-stretch flex items-start overflow-clip relative self-stretch shrink-0 w-[165px]" data-name="Tabs">
                              <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
                                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
                                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                                    <Frame>
                                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon-park-outline:box">
                                        <div className="absolute inset-[10.42%_12.5%_12.5%_12.5%]" data-name="Group">
                                          <div className="absolute inset-[-6.49%_-6.67%]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17.4167">
                                              <g id="Group">
                                                <path d={svgPaths.p14581c80} id="Vector" stroke="var(--stroke-0, #656565)" strokeLinejoin="round" strokeWidth="2" />
                                                <path d={svgPaths.p1409d260} id="Vector_2" stroke="var(--stroke-0, #656565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                              </g>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </Frame>
                                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Frame">
                                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666] text-[16px] text-nowrap">Library</p>
                                    </div>
                                  </div>
                                  <div className="bg-[#666] h-[2px] shrink-0 w-full" data-name="Rectangle" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="relative rounded-[8px] shrink-0 w-full" data-name="project-item">
                              <div className="overflow-clip rounded-[inherit] size-full">
                                <Text text="Project 1" additionalClassNames="py-[10px]" />
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative rounded-[6px] shrink-0 w-full">
                              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                                <div className="relative rounded-[6px] shrink-0 w-full" data-name="project-item">
                                  <div className="overflow-clip rounded-[inherit] size-full">
                                    <Text text="Project 2" additionalClassNames="py-[8px]" />
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 w-full" data-name="children">
                                  <AudioItemText text="Segment.mp3" />
                                  <AudioItemText text="Outro.wav" />
                                </div>
                              </div>
                            </div>
                            <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col gap-[8px] items-start relative rounded-[6px] shrink-0 w-full">
                              <div className="relative rounded-[8px] shrink-0 w-full" data-name="project-item">
                                <div className="overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex gap-[12px] items-start px-[12px] py-[10px] relative w-full">
                                    <Wrapper2>
                                      <path clipRule="evenodd" d={svgPaths.p21d4df80} fill="var(--fill-0, black)" fillRule="evenodd" id="Icon" />
                                    </Wrapper2>
                                    <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      Project 3
                                    </p>
                                    <Wrapper1>
                                      <path clipRule="evenodd" d={svgPaths.p3ae30b00} fill="var(--fill-0, black)" fillRule="evenodd" id="Icon" />
                                    </Wrapper1>
                                  </div>
                                </div>
                              </div>
                              <Wrapper additionalClassNames="bg-white rounded-[8px]">
                                <Wrapper4>
                                  <g clipPath="url(#clip0_1_3850)" id="Image-file">
                                    <path d={svgPaths.p2aa84200} fill="var(--fill-0, black)" id="Icon" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1_3850">
                                      <rect fill="white" height="20" width="20" />
                                    </clipPath>
                                  </defs>
                                </Wrapper4>
                                <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-black tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Untitled
                                </p>
                              </Wrapper>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow h-full items-start min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="screen-switcher">
              <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Frame">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
                  <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
                    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[34px]" data-name="btn-script">
                      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-0 relative rounded-[inherit] size-full">
                        <Wrapper9>
                          <g id="ant-design:audio-outlined">
                            <path d={svgPaths.p20440e00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" />
                          </g>
                        </Wrapper9>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px overflow-clip relative shrink-0" data-name="Frame">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Untitled</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <Text1 text="Upload source" />
                <BtnBold />
                <Text1 text="Generate script" />
                <BtnBold />
                <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[16px] shrink-0" data-name="tab-upload">
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b82f6] text-[14px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Generate audio
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
              <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Main Content">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
                              <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
                                <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
                                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                                    <div className="relative shrink-0 size-[40px]" data-name="Frame">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                                        <g id="Frame">
                                          <rect fill="var(--fill-0, white)" height="39" rx="7.5" width="39" x="0.5" y="0.5" />
                                          <rect height="39" rx="7.5" stroke="var(--stroke-0, #E5E5E5)" width="39" x="0.5" y="0.5" />
                                          <g id="Icon">
                                            <path clipRule="evenodd" d={svgPaths.p2596300} fill="var(--fill-0, #666666)" fillRule="evenodd" />
                                            <path clipRule="evenodd" d={svgPaths.p301bab80} fill="var(--fill-0, #666666)" fillRule="evenodd" />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px overflow-clip relative shrink-0" data-name="Frame">
                                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Audio settings</p>
                                      <Wrapper4>
                                        <g id="Icon">
                                          <path clipRule="evenodd" d={svgPaths.p16bb7d80} fill="var(--fill-0, #666666)" fillRule="evenodd" />
                                          <path clipRule="evenodd" d={svgPaths.p3708a980} fill="var(--fill-0, #666666)" fillRule="evenodd" />
                                        </g>
                                      </Wrapper4>
                                    </div>
                                  </div>
                                  <div className="bg-black h-[2px] shrink-0 w-full" data-name="Rectangle" />
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                                <div className="content-stretch flex items-end overflow-clip relative shrink-0 w-full" data-name="Voice Row">
                                  <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-end min-h-px min-w-px relative shrink-0">
                                    <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      Person P1
                                    </p>
                                    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                      <div className="bg-[rgba(180,208,255,0.25)] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                        <StateLayer>
                                          <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                                            <Wrapper8>{`Reena - Female UK English `}</Wrapper8>
                                          </div>
                                          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
                                            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                                              <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                                                <Icon />
                                              </div>
                                            </div>
                                          </div>
                                        </StateLayer>
                                      </div>
                                      <ActiveIndicator />
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[477.5px]">
                                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
                                    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-0 overflow-clip relative w-[477.5px]" data-name="Form">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Form">
                                        <div className="content-stretch flex gap-[16px] items-end overflow-clip relative shrink-0 w-full" data-name="Voice Row">
                                          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-end min-h-px min-w-px relative shrink-0">
                                            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              Gender
                                            </p>
                                            <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                              <div className="bg-[rgba(180,208,255,0.25)] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                                <StateLayer>
                                                  <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                                                    <LabelTextContainerText text="Female" />
                                                  </div>
                                                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
                                                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                                                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                                                        <Icon />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </StateLayer>
                                              </div>
                                              <ActiveIndicator1 />
                                            </div>
                                          </div>
                                          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-end min-h-px min-w-px relative shrink-0">
                                            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              Tone
                                            </p>
                                            <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                              <div className="bg-[rgba(180,208,255,0.25)] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                                <StateLayer>
                                                  <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                                                    <LabelTextContainerText text="Measured" />
                                                  </div>
                                                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
                                                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                                                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                                                        <Icon />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </StateLayer>
                                              </div>
                                              <ActiveIndicator1 />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                                <div className="content-stretch flex items-end overflow-clip relative shrink-0 w-full" data-name="Voice Row">
                                  <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-end min-h-px min-w-px relative shrink-0">
                                    <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      Person P2
                                    </p>
                                    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                      <div className="bg-[rgba(180,208,255,0.25)] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                        <StateLayer>
                                          <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                                            <LabelTextContainerText text="Rajesh - Male Hindi" />
                                          </div>
                                          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
                                            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                                              <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                                                <Icon />
                                              </div>
                                            </div>
                                          </div>
                                        </StateLayer>
                                      </div>
                                      <ActiveIndicator />
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[477.5px]">
                                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
                                    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-0 overflow-clip relative w-[477.5px]" data-name="Form">
                                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Form">
                                        <div className="content-stretch flex gap-[16px] items-end overflow-clip relative shrink-0 w-full" data-name="Voice Row">
                                          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-end min-h-px min-w-px relative shrink-0">
                                            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              Gender
                                            </p>
                                            <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                              <div className="bg-[rgba(180,208,255,0.25)] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                                <StateLayer>
                                                  <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                                                    <LabelTextContainerText text="Male" />
                                                  </div>
                                                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
                                                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                                                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                                                        <Icon />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </StateLayer>
                                              </div>
                                              <ActiveIndicator1 />
                                            </div>
                                          </div>
                                          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-end min-h-px min-w-px relative shrink-0">
                                            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              Tone
                                            </p>
                                            <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                              <div className="bg-[rgba(180,208,255,0.25)] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                                <StateLayer>
                                                  <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                                                    <LabelTextContainerText text="Excited" />
                                                  </div>
                                                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing icon">
                                                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
                                                      <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
                                                        <Icon />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </StateLayer>
                                              </div>
                                              <ActiveIndicator1 />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
                            <div className="content-stretch flex items-start relative shrink-0">
                              <div className="content-stretch flex items-start relative shrink-0">
                                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Header Auth">
                                  <Button>
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-nowrap">Generate audio</p>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-0 bg-[#f9f9f9] content-stretch flex grow h-full items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0" data-name="Frame">
                <div className="basis-0 bg-white content-stretch flex grow h-full items-start min-h-px min-w-px overflow-clip px-0 py-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
                  <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Frame">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-0 relative size-full">
                        <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Tabs">
                          <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
                              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                                <div className="h-[32px] relative shrink-0 w-[34px]" data-name="btn-bold">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 32">
                                    <g id="btn-bold">
                                      <path d={svgPaths.p6da6d00} fill="var(--fill-0, white)" />
                                      <path d={svgPaths.p6da6d00} stroke="var(--stroke-0, #D9D9D9)" />
                                      <g id="Icon">
                                        <path clipRule="evenodd" d={svgPaths.p35dba600} fill="var(--fill-0, #666666)" fillRule="evenodd" />
                                        <path clipRule="evenodd" d={svgPaths.p283bcc00} fill="var(--fill-0, #666666)" fillRule="evenodd" />
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Frame">
                                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Podcast Player</p>
                                </div>
                              </div>
                              <div className="bg-black h-[2px] shrink-0 w-full" data-name="Rectangle" />
                            </div>
                          </div>
                        </div>
                        <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="editor">
                                  <div className="overflow-clip rounded-[inherit] size-full">
                                    <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
                                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                                        <div className="content-stretch flex flex-col gap-[2px] items-start not-italic overflow-clip relative shrink-0 text-[14px] w-full" data-name="meta">
                                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#111827] w-full">Interview with Sarah Chen</p>
                                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6b7280] w-full">5:12 • 18.7 MB</p>
                                        </div>
                                        <div className="bg-[#eef2ff] h-[88px] relative rounded-[12px] shrink-0" data-name="audio-player">
                                          <div className="content-stretch flex flex-col gap-[12px] h-full items-center overflow-clip p-[12px] relative rounded-[inherit]">
                                            <div className="bg-white h-[8px] overflow-clip relative rounded-[4px] shrink-0 w-[433.5px]" data-name="track">
                                              <div className="absolute bg-[#3b82f6] h-[8px] left-0 rounded-[4px] top-0 w-[220px]" data-name="progress" />
                                            </div>
                                            <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-[433.5px]" data-name="controls">
                                              <div className="bg-[#111827] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[18px] shrink-0 size-[36px]" data-name="btn-play">
                                                <Play />
                                              </div>
                                              <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="time">
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#6b7280] text-[14px] text-nowrap">1:12</p>
                                                <div className="basis-0 bg-[#3c3232] grow h-px min-h-px min-w-px opacity-0 relative shrink-0" data-name="Frame">
                                                  <div aria-hidden="true" className="absolute border border-[#0f0f0f] border-solid inset-0 pointer-events-none" />
                                                </div>
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#6b7280] text-[14px] text-nowrap">3:45</p>
                                              </div>
                                              <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="volume">
                                                <Wrapper4>
                                                  <g id="Speaker">
                                                    <g id="Icon">
                                                      <path clipRule="evenodd" d={svgPaths.p1968ee00} fill="var(--fill-0, #111827)" fillRule="evenodd" />
                                                      <path d={svgPaths.p13ddc500} fill="var(--fill-0, #111827)" />
                                                      <path d={svgPaths.p1cf7b800} fill="var(--fill-0, #111827)" />
                                                    </g>
                                                  </g>
                                                </Wrapper4>
                                                <div className="bg-white h-[6px] overflow-clip relative rounded-[3px] shrink-0 w-[120px]" data-name="volume-track">
                                                  <div className="absolute bg-[#3b82f6] h-[6px] left-0 rounded-[3px] top-0 w-[72px]" data-name="volume-progress" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div aria-hidden="true" className="absolute border border-[#b4d0ff] border-solid inset-0 pointer-events-none rounded-[12px]" />
                                        </div>
                                      </div>
                                      <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Audio Editor Toolbar">
                                        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="left-cluster">
                                          <Wrapper10>
                                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Skip Back">
                                              <div className="absolute inset-[0_8.33%_8.33%_8.33%]" data-name="Vector">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 14.6667">
                                                  <g id="Vector">
                                                    <path clipRule="evenodd" d={svgPaths.p7a57480} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" />
                                                    <path d={svgPaths.p9129272} fill="var(--fill-0, #1E1E1E)" />
                                                    <path d={svgPaths.p2c1b0740} fill="var(--fill-0, #1E1E1E)" />
                                                  </g>
                                                </svg>
                                              </div>
                                            </div>
                                          </Wrapper10>
                                          <Wrapper10>
                                            <Wrapper9>
                                              <g id="Play">
                                                <path clipRule="evenodd" d={svgPaths.p2c406a80} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" id="Icon" />
                                              </g>
                                            </Wrapper9>
                                          </Wrapper10>
                                          <Wrapper10>
                                            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Pause">
                                              <div className="absolute inset-[8.33%_20.83%]" data-name="Icon">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 13.3333">
                                                  <g id="Icon">
                                                    <path d={svgPaths.p1c76b320} fill="var(--fill-0, #1E1E1E)" />
                                                    <path d={svgPaths.p3d769300} fill="var(--fill-0, #1E1E1E)" />
                                                  </g>
                                                </svg>
                                              </div>
                                            </div>
                                          </Wrapper10>
                                          <Wrapper10>
                                            <Wrapper9>
                                              <g id="Forward Fill">
                                                <path d={svgPaths.p10a13c00} fill="var(--fill-0, #1E1E1E)" id="Icon" />
                                              </g>
                                            </Wrapper9>
                                          </Wrapper10>
                                          <div className="bg-[#d9d9d9] h-[24px] shrink-0 w-px" data-name="divider-1" />
                                          <Wrapper10>
                                            <Wrapper9>
                                              <g id="Scissors">
                                                <path clipRule="evenodd" d={svgPaths.p159ca080} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" id="Icon" />
                                              </g>
                                            </Wrapper9>
                                          </Wrapper10>
                                        </div>
                                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Header Auth">
                                          <Button>
                                            <Wrapper9>
                                              <g id="Save">
                                                <path d={svgPaths.p1f3a8470} id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" />
                                              </g>
                                            </Wrapper9>
                                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-nowrap">{`Save `}</p>
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col h-[275px] items-start relative shrink-0 w-full">
                                <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="audio-list">
                                  <div className="bg-[#eef2ff] relative rounded-[12px] shrink-0 w-full" data-name="audio-row selected">
                                    <Wrapper3>
                                      <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]" data-name="checkbox">
                                        <div className="content-stretch flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full" />
                                        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
                                      </div>
                                      <div className="bg-[#b4d0ff] relative rounded-[12px] shrink-0 size-[44px]" data-name="btn-volume-up">
                                        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                                          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[18px] shrink-0 size-[36px]" data-name="btn-play">
                                            <Play />
                                          </div>
                                        </div>
                                        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                                      </div>
                                      <Meta text="Interview with Sarah Chen v1.1" text1="3:45 • 12.3 MB" />
                                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="actions">
                                        <div className="bg-[#1e1e1e] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[12px] py-0 relative rounded-[8px] shrink-0" data-name="btn-edit">
                                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-nowrap text-white">Edit</p>
                                        </div>
                                      </div>
                                    </Wrapper3>
                                    <div aria-hidden="true" className="absolute border border-[#b4d0ff] border-solid inset-0 pointer-events-none rounded-[12px]" />
                                  </div>
                                  <AudioRow>
                                    <Helper />
                                    <BtnVolumeUp />
                                    <Meta text="Interview with Sarah Chen v1.2" text1="5:12 • 18.7 MB" />
                                    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="actions">
                                      <BtnEditText text="Edit" />
                                    </div>
                                  </AudioRow>
                                  <AudioRow>
                                    <Helper />
                                    <BtnVolumeUp />
                                    <Meta text="v1.3" text1="2:08 • 9.1 MB" />
                                    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="actions">
                                      <BtnEditText text="Edit" />
                                    </div>
                                  </AudioRow>
                                  <AudioRow>
                                    <Helper />
                                    <BtnVolumeUp />
                                    <Meta text="v1.4" text1="4:30 • 15.4 MB" />
                                    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="actions">
                                      <BtnEditText text="Edit" />
                                    </div>
                                  </AudioRow>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative rounded-[8px] shrink-0 w-full" data-name="bulk-actions">
                            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
                                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="left">
                                  <Helper />
                                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111827] text-[14px] text-nowrap">Select all</p>
                                </div>
                                <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="right">
                                  <Wrapper5 additionalClassNames="bg-white">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#111827] text-[14px] text-nowrap">Delete selected</p>
                                  </Wrapper5>
                                  <div className="bg-[#1e1e1e] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[14px] py-0 relative rounded-[8px] shrink-0" data-name="btn-save-best">
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Save selected</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}