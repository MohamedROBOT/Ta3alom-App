import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { ChevronDown, LockKeyholeIcon, Play } from "lucide-react";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <span
          className={`ml-auto transition-transform duration-200  ease-out ${
            isEnter && "rotate-180"
          }`}>
          <ChevronDown />
        </span>
      </>
    )}
    className='rounded-xl overflow-hidden'
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-accent  text-white bg-accent ${
          isEnter && "bg-accent"
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "" }}
  />
);

export default function MyAccordion() {
  return (
    <div className='mx-2 my-4'>
      <Accordion transition transitionTimeout={200}>
        <div className='flex flex-col gap-y-4'>
          <AccordionItem header='Introduction' initialEntered>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                A Beginner’s Introduction to Excel Functions
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                A Quick Introduction to Excel’s Pivot Tables
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                Create Easily Printable Excel Documents
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                Custom Number Formatting
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                Data Entry Techniques in Excel
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
          </AccordionItem>
          <AccordionItem header='Design photoshop - Graphic design'>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                A Beginner’s Introduction to Excel Functions
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                A Quick Introduction to Excel’s Pivot Tables
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                Create Easily Printable Excel Documents
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                Custom Number Formatting
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                Data Entry Techniques in Excel
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
          </AccordionItem>
          <AccordionItem header='Design photoshop - Tools'>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                A Beginner’s Introduction to Excel Functions
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                A Quick Introduction to Excel’s Pivot Tables
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                Create Easily Printable Excel Documents
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                Custom Number Formatting
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                Data Entry Techniques in Excel
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
          </AccordionItem>
          <AccordionItem header='Design photoshop - Layers'>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                A Beginner’s Introduction to Excel Functions
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                A Quick Introduction to Excel’s Pivot Tables
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                Create Easily Printable Excel Documents
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                Custom Number Formatting
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
            <div className='px-8 py-4 bg-accent/20 flex mb-0.5 items-center justify-between'>
              <p className='flex items-center gap-x-2'>
                <span className='p-2 bg-accent rounded-full text-white '>
                  <Play className='fill-white size-3' />
                </span>
                Data Entry Techniques in Excel
              </p>
              <p className='flex items-center gap-x-2'>
                <span className='px-4 py-2 bg-accent text-white'>00.52</span>{" "}
                <LockKeyholeIcon className='size-6 text-accent' />
              </p>
            </div>
          </AccordionItem>
        </div>
      </Accordion>
    </div>
  );
}
