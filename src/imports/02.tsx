import svgPaths from "./svg-hjvzf94q08";
import clsx from "clsx";

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0">
      <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[12px] py-0 relative rounded-[inherit]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[34px]">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-0 relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
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
    <Wrapper3>
      <g id="Folder">{children}</g>
    </Wrapper3>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3>
      <g id="Chevron Down">{children}</g>
    </Wrapper3>
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
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <BtnOutroText text="P1" />
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#49454f] text-[16px] tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type BtnOutroTextProps = {
  text: string;
};

function BtnOutroText({ text }: BtnOutroTextProps) {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] py-0 relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[13px] text-nowrap">{text}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="bg-[#2c2c2c] relative rounded-[8px] shrink-0">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-nowrap">{text}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ActiveIndicator() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(73, 69, 79, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 477.5 1">
          <line id="Active indicator" stroke="var(--stroke-0, #49454F)" x2="477.5" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <Wrapper4>
      <g id="Icon">
        <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #49454F)" id="icon" />
      </g>
    </Wrapper4>
  );
}
type LabelTextContainerTextProps = {
  text: string;
};

function LabelTextContainerText({ text }: LabelTextContainerTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Roboto:Medium',sans-serif] font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#49454f] text-[16px] tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#49454f] text-[14px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type AudioItemTextProps = {
  text: string;
};

function AudioItemText({ text }: AudioItemTextProps) {
  return (
    <Wrapper additionalClassNames="rounded-[6px]">
      <Wrapper3>
        <g clipPath="url(#clip0_1_3759)" id="Image-file">
          <path d={svgPaths.p2aa84200} fill="var(--fill-0, #666666)" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_3759">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </Wrapper3>
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
      <Wrapper4>
        <g id="ic:round-navigate-next">
          <path d={svgPaths.p1c1d2980} fill="var(--fill-0, #646464)" id="Vector" />
        </g>
      </Wrapper4>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="02">
      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
        <div className="bg-[#b4d0ff] content-stretch flex items-start px-[24px] py-[10px] relative shrink-0 w-[1280px]">
          <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
            <Frame>
              <Wrapper3>
                <g id="Microphone">
                  <path clipRule="evenodd" d={svgPaths.p31bd7980} fill="var(--fill-0, #666666)" fillRule="evenodd" id="Icon" />
                </g>
              </Wrapper3>
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
                                <Wrapper3>
                                  <g clipPath="url(#clip0_1_3747)" id="Image-file">
                                    <path d={svgPaths.p2aa84200} fill="var(--fill-0, black)" id="Icon" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1_3747">
                                      <rect fill="white" height="20" width="20" />
                                    </clipPath>
                                  </defs>
                                </Wrapper3>
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
                    <Wrapper5>
                      <div className="relative shrink-0 size-[16px]" data-name="ant-design:audio-outlined">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g id="ant-design:audio-outlined">
                            <path d={svgPaths.p20440e00} id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" />
                          </g>
                        </svg>
                      </div>
                    </Wrapper5>
                    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px overflow-clip relative shrink-0" data-name="Frame">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Untitled</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="relative rounded-[16px] shrink-0" data-name="tab-generate">
                  <Text1 text="Upload source" />
                  <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
                </div>
                <BtnBold />
                <div className="content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[16px] shrink-0" data-name="tab-upload">
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#3b82f6] text-[14px] text-nowrap tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Generate script
                  </p>
                </div>
                <BtnBold />
                <div className="relative rounded-[16px] shrink-0" data-name="tab-audio">
                  <Text1 text="Generate Audio" />
                  <div aria-hidden="true" className="absolute border border-[#646464] border-solid inset-0 pointer-events-none rounded-[16px]" />
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
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
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
                                      <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Frame">
                                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Script settings</p>
                                      </div>
                                    </div>
                                    <div className="bg-black h-[2px] shrink-0 w-full" data-name="Rectangle" />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                                <div className="content-stretch flex items-end overflow-clip relative shrink-0 w-full" data-name="Voice Row">
                                  <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-end min-h-px min-w-px relative shrink-0">
                                    <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      Language 1
                                    </p>
                                    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                      <div className="bg-[rgba(180,208,255,0.25)] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                        <StateLayer>
                                          <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                                            <LabelTextContainerText text="English" />
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
                                <div className="content-stretch flex items-end overflow-clip relative shrink-0 w-full" data-name="Voice Row">
                                  <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-end min-h-px min-w-px relative shrink-0">
                                    <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#49454f] text-[16px] text-nowrap tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      Language 2
                                    </p>
                                    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                      <div className="bg-[rgba(180,208,255,0.25)] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
                                        <StateLayer>
                                          <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
                                            <LabelTextContainerText text="Hindi" />
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
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
                            <div className="content-stretch flex items-start relative shrink-0">
                              <div className="content-stretch flex items-start relative shrink-0">
                                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Header Auth">
                                  <ButtonText text="Generate script" />
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
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Preview script</p>
                              </div>
                            </div>
                            <div className="bg-black h-[2px] shrink-0 w-full" data-name="Rectangle" />
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
                              <div className="relative shrink-0 w-full" data-name="Text Editor Toolbar">
                                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative w-full">
                                    <div className="content-stretch flex items-start relative shrink-0">
                                      <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="group-text-style">
                                        <Wrapper5>
                                          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[13px] text-nowrap">B</p>
                                        </Wrapper5>
                                        <Wrapper5>
                                          <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#1e1e1e] text-[13px] text-nowrap">I</p>
                                        </Wrapper5>
                                        <Wrapper5>
                                          <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[13px] text-nowrap underline">U</p>
                                        </Wrapper5>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="group-script-structure">
                                      <Wrapper6>
                                        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Grid">
                                          <div className="absolute inset-[4.17%]" data-name="Icon">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                                              <path clipRule="evenodd" d={svgPaths.p30170780} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" id="Icon" />
                                            </svg>
                                          </div>
                                        </div>
                                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[13px] text-nowrap">Timestamp</p>
                                      </Wrapper6>
                                      <Wrapper6>
                                        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Grid">
                                          <div className="absolute inset-[8.33%]" data-name="Icon">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                                              <g id="Icon">
                                                <path clipRule="evenodd" d={svgPaths.p191ceb80} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" />
                                                <path clipRule="evenodd" d={svgPaths.p36841780} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" />
                                                <path clipRule="evenodd" d={svgPaths.p6b41580} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" />
                                                <path clipRule="evenodd" d={svgPaths.p23509a40} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" />
                                              </g>
                                            </svg>
                                          </div>
                                        </div>
                                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[13px] text-nowrap">Segment</p>
                                      </Wrapper6>
                                      <Wrapper6>
                                        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Grid">
                                          <div className="absolute inset-[4.17%_12.5%]" data-name="Icon">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0002 14.6667">
                                              <path clipRule="evenodd" d={svgPaths.p5af7500} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" id="Icon" />
                                            </svg>
                                          </div>
                                        </div>
                                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[13px] text-nowrap">Cue</p>
                                      </Wrapper6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
                                <div className="basis-0 bg-white grow min-h-[80px] min-w-px relative rounded-[6px] shrink-0 w-full" data-name="Text area">
                                  <div className="min-h-[inherit] overflow-auto size-full">
                                    <div className="content-stretch flex items-start min-h-[inherit] pb-[24px] pt-[8px] px-[12px] relative size-full">
                                      <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                                        <Text2 text="Welcome to our podcast. Today we’re exploring how AI can help creators craft engaging conversations." />
                                        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                                          <BtnOutroText text="P2" />
                                          <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#49454f] text-[16px] tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                            That’s right. We’ll look at prompts, tone, and pacing to make your dialogue feel natural and compelling.
                                          </p>
                                        </div>
                                        <Text2 text="Let’s start with a simple prompt. What should we talk about?" />
                                      </div>
                                    </div>
                                  </div>
                                  <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-end justify-end relative shrink-0 w-full">
                            <div className="content-stretch flex items-start relative shrink-0">
                              <div className="content-stretch flex items-start relative shrink-0">
                                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Header Auth">
                                  <ButtonText text="Continue to generate audio" />
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