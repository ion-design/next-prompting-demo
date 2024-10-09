"use client";
// Generated with Ion on 8/14/2024, 1:59:23 PM
// Figma Link: https://www.figma.com/design/BsgE00bYWTmwm4RY0WmYN6?node-id=1:10602
import {
  ArrowDown,
  ArrowUp,
  CalendarBlank,
  CaretDown,
  CurrencyDollar,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import { LineChart } from "@tremor/react";
import { type MouseEvent, useState } from "react";
import { motion } from "framer-motion";

import Button from "@/components/ion/Button";
import Badge from "@/components/ion/Badge";
import Datepicker from "@/components/ion/Datepicker";
import Input from "@/components/ion/Input";
import SideNavigation from "@/components/ion/SideNavigation";
import { Tab, Tabs, TabsList } from "@/components/ion/Tabs";
import TokenMetric from "@/components/ion/TokenMetric";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function DashboardExample() {
  const [inputValue, setInputValue] = useState("");

  function buyClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("buyClickHandler fired");
  }

  return (
    <motion.div
      className="bg-background w-screen h-screen flex"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SideNavigation />
      <div className="bg-background flex-1 w-full flex flex-col gap-5 p-10">
        <motion.div
          className="w-full flex justify-between items-center"
          variants={sectionVariants}
        >
          <div className="flex items-center gap-5">
            <motion.div
              className="bg-on-neutral-container flex flex-col justify-center items-center p-2.5 rounded"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src="/images/dashboard-example/Logo.svg"
                alt="Logo"
                className="h-4 w-4"
              />
            </motion.div>
            <Tabs defaultValue="Overview">
              <TabsList>
                <Tab value="Overview">Overview</Tab>
                <Tab value="Pools">Pools</Tab>
                <Tab value="Tokens">Tokens</Tab>
              </TabsList>
            </Tabs>
          </div>
          <div className="flex items-center gap-5">
            <Input
              placeholder="Search"
              iconLeading={<MagnifyingGlass size={16} weight={"bold"} />}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-[250px]"
            />
            <Button
              iconLeading={<CurrencyDollar size={16} weight={"bold"} />}
              variant="filled"
              color="primary"
              size="md"
              onClick={buyClickHandler}
            >
              Buy
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="flex items-start gap-5"
          variants={sectionVariants}
        >
          <TokenMetric
            metric="$1.35b"
            badge={
              <Badge
                iconLeading={<ArrowUp size={12} weight={"bold"} />}
                variant="soft"
                color="green"
                size="md"
              >
                8.23%
              </Badge>
            }
            title="Volume 24H"
          />
          <TokenMetric
            metric="$4.56"
            badge={
              <Badge
                iconLeading={<ArrowDown size={12} weight={"bold"} />}
                variant="soft"
                color="red"
                size="md"
              >
                4.28%
              </Badge>
            }
            title="TVL"
          />
        </motion.div>
        <motion.div
          className="w-full flex flex-col gap-2"
          variants={sectionVariants}
        >
          <div className="text-lg font-semibold text-foreground">Overview</div>
          <motion.div
            className="bg-background w-full flex flex-col items-center gap-5 p-5 rounded-radius-sm border border-stroke-strong shadow-[0_1px_8px_0_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col justify-center">
                <div className="text-sm text-subtle">TVL</div>
                <div className="text-3xl font-semibold text-foreground">
                  $2.54b
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Datepicker
                  iconTrailing={<CaretDown size={16} weight={"bold"} />}
                  iconLeading={<CalendarBlank size={16} weight={"regular"} />}
                  className="w-[250px]"
                />
                <Tabs defaultValue="D">
                  <TabsList>
                    <Tab value="D">D</Tab>
                    <Tab value="W">W</Tab>
                    <Tab value="M">M</Tab>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            <LineChart
              valueFormatter={(number) =>
                `$${Intl.NumberFormat().format(number).toString()}`
              }
              index={"number"}
              data={[
                {
                  number: 1,
                  Ether: 182,
                  USDC: 160,
                },
                {
                  number: 2,
                  Ether: 272,
                  USDC: 274,
                },
                {
                  number: 3,
                  Ether: 397,
                  USDC: 352,
                },
                {
                  number: 4,
                  Ether: 404,
                  USDC: 472,
                },
                {
                  number: 5,
                  Ether: 440,
                  USDC: 560,
                },
              ]}
              categories={["Ether", "USDC"]}
              yAxisWidth={48}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default DashboardExample;