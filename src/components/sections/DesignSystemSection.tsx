"use client";

import React, { useState, useRef } from "react";
import {
  CheckCircle2,
  Search,
  Calendar,
  ChevronDown,
  X,
  Plus,
  FileText,
  MoreVertical,
  TrendingUp,
  Upload,
  AlertCircle,
  AlertTriangle,
  Info,
  LayoutDashboard,
  Settings,
  Users,
  LogOut,
  Folder,
  Check,
  Copy,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DesignSystemSection() {
  // Clipboard copying state
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1500);
  };

  // Interactive controls states
  const [inputValue, setInputValue] = useState("");
  const [focusedValue, setFocusedValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [isSwitchActive, setIsSwitchActive] = useState(true);
  const [checkedBox, setCheckedBox] = useState(true);
  const [selectedRadio, setSelectedRadio] = useState("selected");
  const [dropdownValue, setDropdownValue] = useState("Option 1");
  const [multiSelect, setMultiSelect] = useState(["Option 1", "Option 2"]);
  const [dateValue, setDateValue] = useState("2024-05-12");

  // Accordion state
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  // Table row selection state
  const [selectedRows, setSelectedRows] = useState<number[]>([0, 2, 3]);

  const toggleRow = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter(r => r !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const toggleAllRows = () => {
    if (selectedRows.length === tableData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(tableData.map((_, i) => i));
    }
  };

  const tableData = [
    { name: "Aadhar Card.pdf", type: "ID Proof", status: "Approved", date: "12 May 2024" },
    { name: "PAN Card.pdf", type: "ID Proof", status: "Pending", date: "10 May 2024" },
    { name: "Address Proof.pdf", type: "Address Proof", status: "Approved", date: "08 May 2024" },
    { name: "Bank Statement.pdf", type: "Bank Statement", status: "Rejected", date: "05 May 2024" }
  ];

  // Navigation Drawer selection state
  const [activeNav, setActiveNav] = useState("Dashboard");

  // Tabs state
  const [activeTab, setActiveTab] = useState("Documents");

  // Dialog/Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setUploadStatus("idle");
      setUploadProgress(0);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    setUploadStatus("uploading");
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus("success");
          setTimeout(() => {
            setIsModalOpen(false);
            setSelectedFile(null);
            setUploadStatus("idle");
            setUploadProgress(0);
            setAlerts(prevAlerts => [
              { id: Date.now(), type: "success", title: "Document Uploaded Successfully", desc: `"${selectedFile.name}" has been uploaded to neumorphic storage.` },
              ...prevAlerts
            ]);
          }, 800);
          return 100;
        }
        return prev + 25;
      });
    }, 150);
  };

  // Alerts state
  const [alerts, setAlerts] = useState([
    { id: 1, type: "success", title: "Document Approved", desc: "Validation completed successfully." },
    { id: 2, type: "error", title: "Validation Failed", desc: "Please review the errors and try again." },
    { id: 3, type: "warning", title: "Action Required", desc: "Please review and take necessary action." },
    { id: 4, type: "info", title: "Information", desc: "This is an informational message for you." }
  ]);

  const dismissAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const resetAlerts = () => {
    setAlerts([
      { id: 1, type: "success", title: "Document Approved", desc: "Validation completed successfully." },
      { id: 2, type: "error", title: "Validation Failed", desc: "Please review the errors and try again." },
      { id: 3, type: "warning", title: "Action Required", desc: "Please review and take necessary action." },
      { id: 4, type: "info", title: "Information", desc: "This is an informational message for you." }
    ]);
  };

  return (
    <section className="mt-24 pt-16 pb-12 bg-[#EEF2F6] text-slate-700 rounded-[40px] px-6 md:px-10 shadow-[inset_6px_6px_16px_rgba(163,177,198,0.35),inset_-6px_-6px_16px_#ffffff] border border-white/50 overflow-hidden relative">

      {/* Toast Notification for Clipboard Copy */}
      <AnimatePresence>
        {copiedText && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[#EEF2F6] text-slate-800 px-5 py-3 rounded-2xl shadow-[6px_6px_15px_#c8d0e7,-6px_-6px_15px_#ffffff] border border-white/60 text-xs font-bold"
          >
            <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
            <span>Copied {copiedText} to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Design System Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/40 pb-8 mb-12">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#02A74B] bg-[#EEF2F6] px-4 py-2 rounded-full shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] border border-white/40">
            Soft UI Framework
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800">
            Neumorphic Design System
          </h2>
          <p className="text-slate-500 font-semibold text-xs mt-1.5">
            For React MUI Application &bull; Primary Color: <span className="font-bold text-[#02A74B]">#02A74B</span> &bull; Font Family: <span className="font-bold text-slate-700">Inter</span>
          </p>
        </div>
        <button
          onClick={resetAlerts}
          className="mt-5 md:mt-0 flex items-center gap-2 px-4.5 py-2.5 rounded-2xl bg-[#EEF2F6] text-slate-600 hover:text-[#02A74B] font-bold text-xs transition duration-200 shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] border border-white/60 active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]"
        >
          Reset Interactive State
        </button>
      </div>

      {/* Grid of Sections */}
      <div className="grid gap-16">

        {/* Section 1: Colors */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-6 flex items-center gap-2 select-none">
            <span>01</span> &bull; COLOR SCALES & PALETTES
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Primary Color Scale */}
            <div className="lg:col-span-5 bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                Primary Color Scale (Neumorphic Tone)
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                {[
                  { label: "100", hex: "#E6F8EE" },
                  { label: "200", hex: "#CCF1DD" },
                  { label: "300", hex: "#99E3BB" },
                  { label: "400", hex: "#66D598" },
                  { label: "500", hex: "#02A74B", primary: true },
                  { label: "600", hex: "#018E40" },
                  { label: "700", hex: "#017536" }
                ].map((color) => (
                  <button
                    key={color.label}
                    onClick={() => copyToClipboard(color.hex)}
                    className="group flex flex-col items-center p-2 rounded-2xl hover:shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] transition duration-200 text-left"
                  >
                    <div
                      className="w-12 h-12 rounded-full shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] relative flex items-center justify-center border border-white/50 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] transition-shadow duration-150"
                      style={{ backgroundColor: color.hex }}
                    >
                      <Copy className={`w-3.5 h-3.5 ${color.primary ? 'text-white' : 'text-slate-700'} opacity-0 group-hover:opacity-75 transition-opacity`} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 mt-2">{color.label}</span>
                    <span className="text-[9px] font-mono text-slate-400 uppercase">{color.hex}</span>
                    {color.primary && <span className="text-[8px] font-bold text-[#02A74B] uppercase tracking-wider mt-0.5">Primary</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Neutral Palette */}
            <div className="lg:col-span-4 bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                Neutral Palette
              </h4>
              <div className="grid grid-cols-5 gap-2.5">
                {[
                  { label: "50", hex: "#FAFAFA" },
                  { label: "100", hex: "#F5F5F5" },
                  { label: "200", hex: "#EEEEEE" },
                  { label: "300", hex: "#E0E0E0" },
                  { label: "400", hex: "#BDBDBD" },
                  { label: "500", hex: "#9E9E9E" },
                  { label: "600", hex: "#757575" },
                  { label: "700", hex: "#616161" },
                  { label: "800", hex: "#424242" },
                  { label: "900", hex: "#212121" }
                ].map((color) => (
                  <button
                    key={color.label}
                    onClick={() => copyToClipboard(color.hex)}
                    className="group flex flex-col items-center p-1.5 rounded-xl hover:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] transition duration-200"
                  >
                    <div
                      className="w-8 h-8 rounded-full shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] flex items-center justify-center border border-white/50"
                      style={{ backgroundColor: color.hex }}
                    >
                      <Copy className={`w-3 h-3 ${parseInt(color.label) > 400 ? 'text-white' : 'text-slate-800'} opacity-0 group-hover:opacity-75 transition-opacity`} />
                    </div>
                    <span className="text-[9px] font-bold text-slate-600 mt-1">{color.label}</span>
                    <span className="text-[8px] font-mono text-slate-400 scale-90 uppercase mt-0.5">{color.hex}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="lg:col-span-3 bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                Semantic Colors (Neumorphic)
              </h4>
              <div className="space-y-3">
                {[
                  { name: "Success", items: [{ l: "Light", h: "#EBF7DF" }, { l: "Main", h: "#02A74B" }, { l: "Dark", h: "#017536" }] },
                  { name: "Warning", items: [{ l: "Light", h: "#FFF7D6" }, { l: "Main", h: "#F5A524" }, { l: "Dark", h: "#C77807" }] },
                  { name: "Error", items: [{ l: "Light", h: "#FFEAEA" }, { l: "Main", h: "#E53E3E" }, { l: "Dark", h: "#C62828" }] },
                  { name: "Info", items: [{ l: "Light", h: "#EBF4FD" }, { l: "Main", h: "#2196F3" }, { l: "Dark", h: "#1565C0" }] }
                ].map((semantic) => (
                  <div key={semantic.name} className="flex items-center justify-between bg-[#EEF2F6] p-2 rounded-2xl shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
                    <span className="text-xs font-bold text-slate-700 pl-2">{semantic.name}</span>
                    <div className="flex gap-1.5 p-1 bg-[#EEF2F6] rounded-xl">
                      {semantic.items.map((item) => (
                        <button
                          key={item.l}
                          onClick={() => copyToClipboard(item.h)}
                          title={`${semantic.name} ${item.l}: ${item.h}`}
                          className="group relative flex items-center justify-center w-7 h-7 rounded-full shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff] border border-white/60 active:shadow-[inset_2.5px_2.5px_5px_rgba(0,0,0,0.1)] transition-transform duration-100"
                          style={{ backgroundColor: item.h }}
                        >
                          <span className="sr-only">{item.l}</span>
                          <Copy className={`w-3 h-3 ${item.l === 'Light' ? 'text-slate-800' : 'text-white'} opacity-0 group-hover:opacity-75`} />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: Typography & Spacing & Borders */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-6 flex items-center gap-2 select-none">
            <span>02</span> &bull; TYPOGRAPHY, SPACING & LAYOUT SYSTEM
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Typography Scale */}
            <div className="lg:col-span-6 bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50 flex flex-col md:flex-row gap-6">

              {/* Typeface Graphic (Aa card) */}
              <div className="md:w-1/3 bg-[#EEF2F6] p-4.5 rounded-2xl shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] border border-white/40 flex flex-col justify-between items-center text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Typography</span>
                <div className="my-5">
                  <div className="text-7xl font-extrabold text-[#02A74B] select-none select-none tracking-tighter">Aa</div>
                  <div className="text-sm font-black text-slate-700 mt-1">Inter</div>
                </div>
                <div className="w-full text-[9px] font-mono text-slate-400 leading-snug font-semibold select-none break-all">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  1234567890
                </div>
              </div>

              {/* Lists */}
              <div className="flex-1 space-y-3 max-h-[350px] overflow-y-auto pr-2">
                {[
                  { tag: "H1", desc: "48px / Bold (700)", text: "The quick brown fox", class: "text-3xl sm:text-4xl font-bold" },
                  { tag: "H2", desc: "40px / Bold (700)", text: "The quick brown fox", class: "text-2xl sm:text-3xl font-bold" },
                  { tag: "H3", desc: "32px / Semi Bold (600)", text: "The quick brown fox", class: "text-xl sm:text-2xl font-semibold" },
                  { tag: "H4", desc: "28px / Semi Bold (600)", text: "The quick brown fox", class: "text-lg sm:text-xl font-semibold" },
                  { tag: "H5", desc: "24px / Semi Bold (600)", text: "The quick brown fox", class: "text-base sm:text-lg font-semibold" },
                  { tag: "H6", desc: "20px / Semi Bold (600)", text: "The quick brown fox", class: "text-sm sm:text-base font-semibold" },
                  { tag: "Body XL", desc: "18px / Regular (400)", text: "The quick brown fox", class: "text-sm font-normal text-slate-800" },
                  { tag: "Body L", desc: "16px / Regular (400)", text: "The quick brown fox", class: "text-xs.5 font-normal text-slate-700" },
                  { tag: "Body M", desc: "14px / Regular (400)", text: "The quick brown fox", class: "text-xs font-normal text-slate-600" },
                  { tag: "Caption", desc: "12px / Regular (400)", text: "The quick brown fox", class: "text-[11px] font-normal text-slate-500" }
                ].map((item) => (
                  <div key={item.tag} className="flex flex-col py-1.5 border-b border-white/20">
                    <span className="text-[9px] font-mono font-bold text-slate-400">{item.tag} &bull; <span className="font-normal">{item.desc}</span></span>
                    <span className={`text-slate-800 ${item.class} leading-tight truncate mt-0.5`}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacing & Borders */}
            <div className="lg:col-span-3 space-y-6">

              {/* Spacing system */}
              <div className="bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Spacing System (8px Grid)
                </h4>
                <div className="space-y-3">
                  {[
                    { label: "XS", value: "4px", size: "w-1 h-3", desc: "Used for tiny spacing" },
                    { label: "SM", value: "8px", size: "w-2 h-3", desc: "Used for small spacing" },
                    { label: "MD", value: "16px", size: "w-4 h-3", desc: "Default spacing" },
                    { label: "LG", value: "24px", size: "w-6 h-3", desc: "Medium spacing" },
                    { label: "XL", value: "32px", size: "w-8 h-3", desc: "Large spacing" },
                    { label: "XXL", value: "48px", size: "w-12 h-3", desc: "Extra large spacing" },
                    { label: "XXXL", value: "64px", size: "w-16 h-3", desc: "2x extra large spacing" }
                  ].map((space) => (
                    <div key={space.label} className="flex items-center justify-between text-xs font-semibold text-slate-600">
                      <div className="w-10">
                        <span className="font-bold">{space.label}</span>
                        <span className="text-[9px] font-mono text-slate-400 block">{space.value}</span>
                      </div>
                      <div className="flex-1 mx-4 bg-[#EEF2F6] rounded-sm relative h-3 flex items-center justify-start shadow-[inset_1.5px_1.5px_3px_#c8d0e7,inset_-1.5px_-1.5px_3px_#ffffff]">
                        <div className={`bg-[#02A74B]/70 rounded-sm shadow-[1.5px_1.5px_3px_#c8d0e7,-1.5px_-1.5px_3px_#ffffff] border border-white/50 ${space.size}`} />
                      </div>
                      <span className="text-[9px] text-slate-400 text-right w-24 truncate">{space.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Radius & Elevation */}
            <div className="lg:col-span-3 space-y-6">

              {/* Border Radius */}
              <div className="bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Border Radius (Neumorphic)
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { l: "Small", v: "8px", r: "rounded-lg" },
                    { l: "Medium", v: "12px", r: "rounded-xl" },
                    { l: "Large", v: "16px", r: "rounded-2xl" },
                    { l: "XL", v: "20px", r: "rounded-3xl" },
                    { l: "Pill", v: "999px", r: "rounded-full" }
                  ].map((rad) => (
                    <div key={rad.l} className="flex flex-col items-center p-2.5 bg-[#EEF2F6] border border-white/40 rounded-2xl shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff]">
                      <div className={`w-12 h-12 bg-[#EEF2F6] shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] border border-white/50 flex items-center justify-center ${rad.r}`} />
                      <span className="text-[10px] font-bold text-slate-700 mt-2">{rad.l}</span>
                      <span className="text-[8px] font-mono text-slate-400">{rad.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Elevations */}
              <div className="bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Elevation (Shadow)
                </h4>
                <div className="space-y-3">
                  {[
                    { level: "Level 1 (Cards)", value: "0 1px 2px rgba(0,0,0,0.06)", shadow: "shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff]" },
                    { level: "Level 2 (Hover)", value: "0 4px 12px rgba(0,0,0,0.08)", shadow: "shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff]" },
                    { level: "Level 3 (Dialogs)", value: "0 10px 30px rgba(0,0,0,0.12)", shadow: "shadow-[10px_10px_20px_#c8d0e7,-10px_-10px_20px_#ffffff]" }
                  ].map((shadow) => (
                    <div
                      key={shadow.level}
                      className={`p-3 bg-[#EEF2F6] rounded-xl border border-white/50 flex justify-between items-center transition-all duration-200 active:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] ${shadow.shadow}`}
                    >
                      <div className="text-[10px]">
                        <p className="font-bold text-slate-700">{shadow.level}</p>
                        <p className="font-mono text-[8px] text-slate-400 mt-0.5">{shadow.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Section 3: Interactive Components - Buttons & Inputs */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-6 flex items-center gap-2 select-none">
            <span>03</span> &bull; INTERACTIVE UI ELEMENTS (BUTTONS & INPUTS)
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Buttons Component Panel */}
            <div className="lg:col-span-6 bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                Buttons System (Neumorphic)
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Column 1: Primary Buttons */}
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase text-slate-400 border-b border-white/20 pb-2">Primary Button</h5>

                  {/* Default */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Default</label>
                    <button className="w-full h-11 px-6 bg-[#02A74B] text-white font-bold text-xs rounded-xl shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] border border-[#02A74B]/20 hover:shadow-[5px_5px_10px_#b8c0d2,-5px_-5px_10px_#ffffff] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),inset_-4px_-4px_8px_rgba(255,255,255,0.15)] transition-all duration-150">
                      Button
                    </button>
                  </div>

                  {/* Hover visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Hover State</label>
                    <button className="w-full h-11 px-6 bg-[#018E40] text-white font-bold text-xs rounded-xl shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] border border-[#018E40]/25 transition duration-200">
                      Button
                    </button>
                  </div>

                  {/* Active Visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Active State</label>
                    <button className="w-full h-11 px-6 bg-[#015C2B] text-white font-bold text-xs rounded-xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] border border-transparent">
                      Button
                    </button>
                  </div>

                  {/* Disabled Visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Disabled</label>
                    <button disabled className="w-full h-11 px-6 bg-slate-200 text-slate-400 font-bold text-xs rounded-xl shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] cursor-not-allowed border border-transparent">
                      Button
                    </button>
                  </div>
                </div>

                {/* Column 2: Secondary Buttons */}
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase text-slate-400 border-b border-white/20 pb-2">Secondary Button</h5>

                  {/* Default */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Default</label>
                    <button className="w-full h-11 px-6 bg-[#EEF2F6] border border-white/60 text-[#02A74B] font-bold text-xs rounded-xl shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] hover:shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] active:shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff] transition-all duration-150">
                      Button
                    </button>
                  </div>

                  {/* Hover visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Hover State</label>
                    <button className="w-full h-11 px-6 bg-[#EEF2F6] border border-white/60 text-[#018E40] font-bold text-xs rounded-xl shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] transition duration-200">
                      Button
                    </button>
                  </div>

                  {/* Active Visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Active State</label>
                    <button className="w-full h-11 px-6 bg-[#EEF2F6] border border-transparent text-[#015C2B] font-bold text-xs rounded-xl shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff]">
                      Button
                    </button>
                  </div>

                  {/* Disabled Visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Disabled</label>
                    <button disabled className="w-full h-11 px-6 bg-[#EEF2F6]/60 border border-slate-200/40 text-slate-300 font-bold text-xs rounded-xl shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff] cursor-not-allowed">
                      Button
                    </button>
                  </div>
                </div>

                {/* Column 3: Ghost Buttons */}
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase text-slate-400 border-b border-white/20 pb-2">Ghost Button</h5>

                  {/* Default */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Default</label>
                    <button className="w-full h-11 px-6 bg-transparent text-[#02A74B] font-bold text-xs rounded-xl hover:shadow-[inset_2.5px_2.5px_5px_#c8d0e7,inset_-2.5px_-2.5px_5px_#ffffff] transition duration-150">
                      Button
                    </button>
                  </div>

                  {/* Hover visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Hover State</label>
                    <button className="w-full h-11 px-6 bg-transparent text-[#018E40] font-bold text-xs rounded-xl shadow-[inset_2.5px_2.5px_5px_#c8d0e7,inset_-2.5px_-2.5px_5px_#ffffff]">
                      Button
                    </button>
                  </div>

                  {/* Active Visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Active State</label>
                    <button className="w-full h-11 px-6 bg-transparent text-[#015C2B] font-bold text-xs rounded-xl shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff]">
                      Button
                    </button>
                  </div>

                  {/* Disabled Visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Disabled</label>
                    <button disabled className="w-full h-11 px-6 bg-transparent text-slate-300 font-bold text-xs rounded-xl cursor-not-allowed">
                      Button
                    </button>
                  </div>
                </div>

              </div>

              {/* Button Sizes */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h5 className="text-[10px] font-black uppercase text-slate-400 mb-4">Button Sizes</h5>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div>
                    <button className="h-12 px-7 bg-[#02A74B] text-white font-bold text-xs rounded-xl shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.15)] transition duration-150">
                      Large Button
                    </button>
                    <p className="text-[9px] font-mono text-slate-400 mt-2">Height: 48px | Padding: 0 28px | Font: 16px</p>
                  </div>
                  <div>
                    <button className="h-11 px-6 bg-[#02A74B] text-white font-bold text-xs rounded-xl shadow-[4px_4px_8px_#c8d0e7,-4px_-4px_8px_#ffffff] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.15)] transition duration-150">
                      Medium Button
                    </button>
                    <p className="text-[9px] font-mono text-slate-400 mt-2">Height: 44px | Padding: 0 24px | Font: 14px</p>
                  </div>
                  <div>
                    <button className="h-9 px-4 bg-[#02A74B] text-white font-bold text-xs rounded-xl shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15)] transition duration-150">
                      Small Button
                    </button>
                    <p className="text-[9px] font-mono text-slate-400 mt-2">Height: 36px | Padding: 0 16px | Font: 13px</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Input Fields Component Panel */}
            <div className="lg:col-span-6 bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                Input Controls (Neumorphic)
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">

                {/* Default Text Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 pl-1">Label</label>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter text here"
                    className="w-full h-11 px-4 bg-[#EEF2F6] border border-transparent text-slate-800 rounded-xl text-xs shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:border-[#02A74B]/30 focus:shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff,0_0_8px_rgba(2,167,75,0.1)] transition duration-200"
                  />
                  <span className="text-[11px] font-medium text-slate-400 pl-1 block">Helper text goes here</span>
                </div>

                {/* Focus State Simulated */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#02A74B] pl-1">Focus</label>
                  <input
                    type="text"
                    value={focusedValue}
                    onChange={(e) => setFocusedValue(e.target.value)}
                    placeholder="Enter text here"
                    className="w-full h-11 px-4 bg-[#EEF2F6] border border-[#02A74B]/40 text-slate-800 rounded-xl text-xs shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff,0_0_8px_rgba(2,167,75,0.12)] focus:outline-none transition duration-200"
                  />
                  <span className="text-[11px] font-bold text-[#02A74B] pl-1 block">Helper text goes here</span>
                </div>

                {/* Error State Simulated */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-red-500 pl-1">Error</label>
                  <input
                    type="text"
                    value={errorValue}
                    onChange={(e) => setErrorValue(e.target.value)}
                    placeholder="Enter text here"
                    className="w-full h-11 px-4 bg-[#EEF2F6] border border-red-500/40 text-slate-800 rounded-xl text-xs shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff,0_0_8px_rgba(229,62,62,0.12)] focus:outline-none transition duration-200"
                  />
                  <span className="text-[11px] font-bold text-red-500 pl-1 block">Error message here</span>
                </div>

                {/* Disabled Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 pl-1">Disabled</label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter text here"
                    className="w-full h-11 px-4 bg-slate-200/50 border border-slate-200/40 text-slate-400 rounded-xl text-xs cursor-not-allowed shadow-none"
                  />
                  <span className="text-[11px] font-medium text-slate-300 pl-1 block">Disabled helper text</span>
                </div>

                {/* Text Field with Icon */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 pl-1">Search Field</label>
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                    <input
                      type="text"
                      placeholder="Search documents..."
                      className="w-full h-11 pl-11 pr-4 bg-[#EEF2F6] border border-transparent text-slate-800 rounded-xl text-xs shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:border-[#02A74B]/30 focus:shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff,0_0_8px_rgba(2,167,75,0.1)] transition duration-200"
                    />
                  </div>
                </div>

                {/* Select Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 pl-1">Select Dropdown</label>
                  <div className="relative">
                    <select
                      value={dropdownValue}
                      onChange={(e) => setDropdownValue(e.target.value)}
                      className="w-full h-11 px-4 pr-10 bg-[#EEF2F6] border border-transparent text-slate-700 rounded-xl text-xs shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:border-[#02A74B]/30 transition duration-200 appearance-none font-bold"
                    >
                      <option value="Option 1">Select an option</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                      <option value="Option 3">Option 3</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Multi Select */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 pl-1">Multi Select</label>
                  <div className="relative flex items-center gap-1.5 flex-wrap w-full min-h-11 px-3 py-2 bg-[#EEF2F6] border border-transparent text-slate-800 rounded-xl text-xs shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff] focus-within:border-[#02A74B]/20 transition duration-200">
                    {multiSelect.map((opt) => (
                      <span key={opt} className="inline-flex items-center gap-1 bg-[#EEF2F6] text-slate-700 font-bold px-2 py-0.5 rounded-lg text-[10px] shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff] border border-white/60">
                        {opt}
                        <button
                          onClick={() => setMultiSelect(multiSelect.filter(o => o !== opt))}
                          className="hover:text-red-500 transition duration-150 p-0.5"
                        >
                          <X className="w-2.5 h-2.5 stroke-[2.5]" />
                        </button>
                      </span>
                    ))}
                    {multiSelect.length < 3 && (
                      <button
                        onClick={() => {
                          const missing = ["Option 1", "Option 2", "Option 3"].find(o => !multiSelect.includes(o));
                          if (missing) setMultiSelect([...multiSelect, missing]);
                        }}
                        className="text-[10px] text-[#02A74B] font-extrabold flex items-center gap-0.5 ml-auto hover:underline"
                      >
                        <Plus className="w-3 h-3 stroke-[3]" /> Add
                      </button>
                    )}
                  </div>
                </div>

                {/* Date Picker */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 pl-1">Date Picker</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={dateValue}
                      onChange={(e) => setDateValue(e.target.value)}
                      className="w-full h-11 px-4 bg-[#EEF2F6] border border-transparent text-slate-700 rounded-xl text-xs shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:border-[#02A74B]/30 transition duration-200 font-bold uppercase"
                    />
                  </div>
                </div>

              </div>

              {/* Toggles, Checkbox, Switch Row */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">

                {/* Switch */}
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase text-slate-400 block">Switch</span>
                  <div className="flex flex-col gap-2.5">
                    <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-slate-500 font-bold">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={isSwitchActive}
                          onChange={(e) => setIsSwitchActive(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`block w-10 h-6 rounded-full transition-colors duration-200 ${isSwitchActive ? 'bg-[#02A74B]' : 'bg-[#EEF2F6] shadow-[inset_2.5px_2.5px_5px_#c8d0e7,inset_-2.5px_-2.5px_5px_#ffffff]'}`} />
                        <div className={`absolute left-1 top-1 bg-[#EEF2F6] w-4 h-4 rounded-full transition-transform duration-200 shadow-[1px_1.5px_3px_rgba(0,0,0,0.15)] border border-white/50 ${isSwitchActive ? 'transform translate-x-4' : ''}`} />
                      </div>
                      <span className="font-bold text-slate-700">{isSwitchActive ? "Active" : "Inactive"}</span>
                    </label>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase text-slate-400 block">Checkbox</span>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700 font-bold select-none">
                      <input
                        type="checkbox"
                        checked={checkedBox}
                        onChange={(e) => setCheckedBox(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded flex items-center justify-center transition-all duration-150 ${checkedBox ? 'bg-[#EEF2F6] text-[#02A74B] shadow-[2.5px_2.5px_5px_#c8d0e7,-2.5px_-2.5px_5px_#ffffff] border border-white/40' : 'bg-[#EEF2F6] shadow-[inset_2.5px_2.5px_5px_#c8d0e7,inset_-2.5px_-2.5px_5px_#ffffff] border border-transparent text-transparent'}`}>
                        <Check className="w-3.5 h-3.5 stroke-[4.5]" />
                      </div>
                      <span>{checkedBox ? "Checked" : "Unchecked"}</span>
                    </label>
                  </div>
                </div>

                {/* Radio */}
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase text-slate-400 block">Radio Button</span>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-bold select-none">
                      <input
                        type="radio"
                        name="interactive-radio"
                        checked={selectedRadio === "selected"}
                        onChange={() => setSelectedRadio("selected")}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-150 ${selectedRadio === "selected" ? 'bg-[#EEF2F6] shadow-[2.5px_2.5px_5px_#c8d0e7,-2.5px_-2.5px_5px_#ffffff] border border-white/40' : 'bg-[#EEF2F6] shadow-[inset_2.5px_2.5px_5px_#c8d0e7,inset_-2.5px_-2.5px_5px_#ffffff] border border-transparent'}`}>
                        {selectedRadio === "selected" && <div className="w-2 h-2 rounded-full bg-[#02A74B] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />}
                      </div>
                      <span>Selected</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-bold select-none">
                      <input
                        type="radio"
                        name="interactive-radio"
                        checked={selectedRadio === "unselected"}
                        onChange={() => setSelectedRadio("unselected")}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-150 ${selectedRadio === "unselected" ? 'bg-[#EEF2F6] shadow-[2.5px_2.5px_5px_#c8d0e7,-2.5px_-2.5px_5px_#ffffff] border border-white/40' : 'bg-[#EEF2F6] shadow-[inset_2.5px_2.5px_5px_#c8d0e7,inset_-2.5px_-2.5px_5px_#ffffff] border border-transparent'}`}>
                        {selectedRadio === "unselected" && <div className="w-2 h-2 rounded-full bg-[#02A74B] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />}
                      </div>
                      <span>Unselected</span>
                    </label>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Section 4: Alerts, Accordions & Data Table */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-6 flex items-center gap-2 select-none">
            <span>04</span> &bull; ADVANCED INTERACTIVE COMPONENTS
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Column 1: Alerts & Accordions */}
            <div className="lg:col-span-5 space-y-6">

              {/* Alerts container */}
              <div className="bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex justify-between items-center">
                  <span>Alert Notifications (Neumorphic)</span>
                  {alerts.length === 0 && (
                    <button onClick={resetAlerts} className="text-[9px] font-bold text-[#02A74B] uppercase tracking-wider hover:underline">
                      Show All
                    </button>
                  )}
                </h4>

                <div className="space-y-3">
                  <AnimatePresence>
                    {alerts.map((alert) => {
                      let textCls = "text-slate-700";
                      let borderCls = "border-slate-300/60";
                      let icon = <Info className="w-4 h-4 text-slate-500" />;

                      if (alert.type === "success") {
                        textCls = "text-[#017536]";
                        borderCls = "border-emerald-300/40";
                        icon = <CheckCircle2 className="w-4 h-4 text-[#02A74B] shrink-0" />;
                      } else if (alert.type === "error") {
                        textCls = "text-[#C62828]";
                        borderCls = "border-red-300/40";
                        icon = <AlertCircle className="w-4 h-4 text-[#E53E3E] shrink-0" />;
                      } else if (alert.type === "warning") {
                        textCls = "text-[#C77807]";
                        borderCls = "border-amber-300/40";
                        icon = <AlertTriangle className="w-4 h-4 text-[#F5A524] shrink-0" />;
                      } else if (alert.type === "info") {
                        textCls = "text-[#1565C0]";
                        borderCls = "border-blue-300/40";
                        icon = <Info className="w-4 h-4 text-[#2196F3] shrink-0" />;
                      }

                      return (
                        <motion.div
                          key={alert.id}
                          layout
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className={`flex items-start gap-3 p-3.5 rounded-2xl bg-[#EEF2F6] border border-white/60 text-left shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] ${textCls}`}
                        >
                          <div className="mt-0.5 shrink-0">{icon}</div>
                          <div className="flex-1">
                            <h5 className="text-xs font-bold leading-tight">{alert.title}</h5>
                            <p className="text-[10.5px] leading-snug mt-0.5 opacity-90">{alert.desc}</p>
                          </div>
                          <button
                            onClick={() => dismissAlert(alert.id)}
                            className="text-slate-400 hover:text-slate-600 transition shrink-0 ml-1.5 p-1 rounded-xl shadow-[1px_1px_2px_#c8d0e7,-1px_-1px_2px_#ffffff] border border-white/40 hover:shadow-[inset_1px_1px_2px_#c8d0e7]"
                          >
                            <X className="w-3 h-3 stroke-[2.5]" />
                          </button>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>

              {/* Accordion container */}
              <div className="bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Accordion System (Neumorphic)
                </h4>

                <div className="rounded-2xl overflow-hidden bg-[#EEF2F6] shadow-[inset_2.5px_2.5px_5px_#c8d0e7,inset_-2.5px_-2.5px_5px_#ffffff] p-2">
                  {/* Accordion Header */}
                  <button
                    onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                    className="w-full flex items-center justify-between px-4.5 py-3 rounded-xl bg-[#EEF2F6] text-left font-bold text-slate-700 text-xs shadow-[2.5px_2.5px_5px_#c8d0e7,-2.5px_-2.5px_5px_#ffffff] border border-white/50 hover:text-[#02A74B] transition duration-150 select-none"
                  >
                    <span>Validation Documents</span>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-[inset_1px_1px_2px_#c8d0e7,inset_-1px_-1px_2px_#ffffff] text-slate-400">
                      {isAccordionOpen ? <span className="font-extrabold text-xs">-</span> : <span className="font-extrabold text-xs">+</span>}
                    </div>
                  </button>

                  {/* Accordion Body */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isAccordionOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-4.5 space-y-4">
                      <p className="text-[11px] text-slate-500 leading-relaxed font-bold pl-1">
                        Upload and validate your documents easily. Supported formats include PDF, JPG, PNG and more.
                      </p>

                      {/* Sub-item checklists */}
                      <div className="space-y-2.5">
                        {[
                          { name: "ID Proof", status: "Approved", color: "bg-[#EBF7DF] text-[#017536] border-[#02A74B]/20" },
                          { name: "Address Proof", status: "Pending", color: "bg-[#FFF7D6] text-[#C77807] border-[#F5A524]/20" },
                          { name: "Bank Statement", status: "Approved", color: "bg-[#EBF7DF] text-[#017536] border-[#02A74B]/20" }
                        ].map((item) => (
                          <div key={item.name} className="flex items-center justify-between p-2.5 rounded-xl border border-white/50 bg-[#EEF2F6] shadow-[2px_2px_4px_#c8d0e7,-2px_-2px_4px_#ffffff]">
                            <span className="text-xs font-bold text-slate-600 flex items-center gap-2">
                              <FileText className="w-3.5 h-3.5 text-slate-400" />
                              {item.name}
                            </span>
                            <span className={`text-[9px] font-black px-2.5 py-0.5 rounded-full border shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05)] ${item.color}`}>
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Column 2: Data Table */}
            <div className="lg:col-span-7 bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50 flex flex-col justify-between">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Interactive Data Table (Neumorphic)
                </h4>
                <p className="text-slate-400 text-xs font-semibold mb-6">
                  Select rows to test active highlighting. Selected rows are highlighted with custom primary tones.
                </p>

                <div className="overflow-x-auto rounded-2xl bg-[#EEF2F6] shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] p-1.5 border border-white/40">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/20 text-slate-400 font-bold uppercase tracking-wider text-[9px] bg-[#EEF2F6]">
                        <th className="p-4 w-12 text-center">
                          <label className="flex items-center justify-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedRows.length === tableData.length}
                              onChange={toggleAllRows}
                              className="sr-only"
                            />
                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition ${selectedRows.length === tableData.length ? 'bg-[#02A74B] border-transparent text-white shadow-[1px_1px_3px_rgba(0,0,0,0.15)]' : 'border-slate-300/50 bg-[#EEF2F6] shadow-[inset_1.5px_1.5px_3px_#c8d0e7,inset_-1.5px_-1.5px_3px_#ffffff]'}`}>
                              {selectedRows.length === tableData.length && <Check className="w-2.5 h-2.5 stroke-[4.5]" />}
                            </div>
                          </label>
                        </th>
                        <th className="p-4 font-bold text-slate-400">Document Name</th>
                        <th className="p-4 font-bold text-slate-400">Type</th>
                        <th className="p-4 font-bold text-slate-400">Status</th>
                        <th className="p-4 font-bold text-slate-400">Uploaded On</th>
                        <th className="p-4 font-bold text-slate-400 w-12 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {tableData.map((row, index) => {
                        const isSelected = selectedRows.includes(index);
                        let statusColor = "bg-slate-100 text-slate-600 border-slate-200/50";
                        if (row.status === "Approved") statusColor = "bg-[#EBF7DF] text-[#017536] border-[#02A74B]/20";
                        if (row.status === "Pending") statusColor = "bg-[#FFF7D6] text-[#C77807] border-[#F5A524]/20";
                        if (row.status === "Rejected") statusColor = "bg-[#FFEAEA] text-[#C62828] border-red-200/20";

                        return (
                          <tr
                            key={row.name}
                            onClick={() => toggleRow(index)}
                            style={{ height: "56px" }}
                            className={`cursor-pointer transition-all duration-150 select-none ${isSelected
                              ? 'bg-[#CCF1DD]/60 hover:bg-[#CCF1DD]/70 border-l-4 border-l-[#02A74B] font-bold'
                              : 'hover:bg-white/30 bg-transparent'
                              }`}
                          >
                            <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                              <label className="flex items-center justify-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={isSelected}
                                  onChange={() => toggleRow(index)}
                                  className="sr-only"
                                />
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition ${isSelected ? 'bg-[#02A74B] border-transparent text-white shadow-[1.5px_1.5px_3px_rgba(0,0,0,0.15)]' : 'border-slate-300/50 bg-[#EEF2F6] shadow-[inset_1.5px_1.5px_3px_#c8d0e7,inset_-1.5px_-1.5px_3px_#ffffff]'}`}>
                                  {isSelected && <Check className="w-2.5 h-2.5 stroke-[4.5]" />}
                                </div>
                              </label>
                            </td>
                            <td className="p-4 font-bold text-slate-700">
                              <span className="flex items-center gap-2 truncate">
                                <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                                {row.name}
                              </span>
                            </td>
                            <td className="p-4 font-bold text-slate-500">{row.type}</td>
                            <td className="p-4">
                              <span className={`text-[9px] font-black px-2.5 py-0.5 rounded-full border shadow-[inset_0.5px_0.5px_1px_rgba(0,0,0,0.02)] ${statusColor}`}>
                                {row.status}
                              </span>
                            </td>
                            <td className="p-4 font-bold text-slate-400">{row.date}</td>
                            <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                              <button className="text-slate-400 hover:text-slate-600 transition p-1 hover:bg-[#EEF2F6] hover:shadow-[1.5px_1.5px_3px_#c8d0e7,-1.5px_-1.5px_3px_#ffffff] rounded-lg border border-transparent hover:border-white/50 active:shadow-[inset_1.5px_1.5px_3px_#c8d0e7]">
                                <MoreVertical className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table legends */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-white/20 text-[9px] text-slate-400 font-bold uppercase tracking-wider select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-[#EEF2F6] rounded-md shadow-[inset_1.5px_1.5px_3.5px_#c8d0e7,inset_-1.5px_-1.5px_3.5px_#ffffff] border border-white/40" />
                  <span>Header Background: <strong className="text-slate-600">#EEF2F6 (Inset)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-white/30 rounded-md border border-white/60 shadow-sm" />
                  <span>Hover: <strong className="text-slate-600">White Overlay</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-[#CCF1DD]/60 rounded-md border-l-2 border-l-[#02A74B]" />
                  <span>Selected: <strong className="text-slate-600">#CCF1DD (60%)</strong></span>
                </div>
                <div>
                  <span>Row Height: <strong className="text-slate-600">56px</strong></span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 5: Complex Layout components */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-6 flex items-center gap-2 select-none">
            <span>05</span> &bull; SYSTEM APPLICATION WIDGETS
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Column 1: Navigation Drawer */}
            <div className="lg:col-span-4 bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50 flex flex-col items-center">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 w-full">
                Navigation Drawer Mockup (Neumorphic)
              </h4>

              <div className="w-full max-w-[280px] bg-[#EEF2F6] border border-white/50 rounded-2xl shadow-[6px_6px_12px_#c8d0e7,-6px_-6px_12px_#ffffff] overflow-hidden flex flex-col h-[380px]">

                {/* Header Profile */}
                <div className="p-5 border-b border-white/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2F6] shadow-[2.5px_2.5px_5px_#c8d0e7,-2.5px_-2.5px_5px_#ffffff] border border-white/60 flex items-center justify-center text-[#02A74B] font-bold">
                    <ShieldCheck className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-slate-800 leading-none">Your Logo</h5>
                    <span className="text-[9px] text-slate-400 font-extrabold uppercase mt-1 block tracking-widest">Enterprise DMS</span>
                  </div>
                </div>

                {/* Sidebar Links */}
                <nav className="flex-1 p-3 space-y-1.5">
                  {[
                    { name: "Dashboard", icon: LayoutDashboard },
                    { name: "Documents", icon: FileText },
                    { name: "Validation", icon: CheckCircle2 },
                    { name: "Reports", icon: TrendingUp },
                    { name: "Settings", icon: Settings },
                    { name: "Users", icon: Users }
                  ].map((item) => {
                    const Icon = item.icon;
                    const isActive = activeNav === item.name;
                    return (
                      <button
                        key={item.name}
                        onClick={() => setActiveNav(item.name)}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-bold transition-all duration-150 select-none ${isActive
                          ? 'bg-[#EEF2F6] text-[#02A74B] shadow-[inset_2.5px_2.5px_5px_#c8d0e7,inset_-2.5px_-2.5px_5px_#ffffff] border border-transparent'
                          : 'text-slate-600 hover:bg-slate-50/20 hover:text-slate-800 border border-transparent'
                          }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-[#02A74B]' : 'text-slate-400'}`} />
                        {item.name}
                      </button>
                    );
                  })}
                </nav>

                {/* Logout Button */}
                <div className="p-3 border-t border-white/20">
                  <button
                    onClick={() => setActiveNav("Logout")}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-bold transition-all duration-150 select-none ${activeNav === "Logout"
                      ? 'bg-[#EEF2F6] text-red-500 shadow-[inset_2.5px_2.5px_5px_#c8d0e7,inset_-2.5px_-2.5px_5px_#ffffff] border border-transparent'
                      : 'text-red-500 hover:bg-red-50/20 hover:text-red-600 border border-transparent'
                      }`}
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Tabs, Dialog trigger and Card widget */}
            <div className="lg:col-span-8 space-y-8 flex flex-col justify-between">

              {/* Top Row: Tabs Container & Dialog Trigger */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Tabs widget */}
                <div className="bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50 flex flex-col justify-between h-[155px]">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                      Navigation Tabs (Neumorphic)
                    </h4>
                    <div className="flex bg-[#EEF2F6] shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] rounded-xl p-1 gap-1 border border-white/20 max-w-fit">
                      {["Dashboard", "Documents", "Reports", "Settings"].map((tab) => {
                        const isActive = activeTab === tab;
                        return (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-4 py-2 rounded-lg text-xs font-extrabold transition-all duration-200 select-none ${isActive
                              ? 'bg-[#EEF2F6] text-[#02A74B] shadow-[2.5px_2.5px_5px_#c8d0e7,-2.5px_-2.5px_5px_#ffffff] border border-white/50'
                              : 'text-slate-400 hover:text-slate-600 border border-transparent'
                              }`}
                          >
                            {tab}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <p className="text-[9px] text-slate-400 font-extrabold mt-2 uppercase tracking-wider select-none">
                    Pill Tabs &bull; Active State: <span className="text-[#02A74B] font-black">Raised Option</span>
                  </p>
                </div>

                {/* Dialog / Modal Trigger container */}
                <div className="bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50 flex flex-col justify-between h-[155px]">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                      Dialog / Modal Component
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold mb-4 leading-normal">
                      Click the button below to trigger the interactive upload modal designed in soft UI style.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="h-10 px-5 bg-[#EEF2F6] text-[#02A74B] font-bold text-xs rounded-xl shadow-[3.5px_3.5px_7px_#c8d0e7,-3.5px_-3.5px_7px_#ffffff] border border-white/50 hover:shadow-[inset_2px_2px_4px_#c8d0e7,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center gap-2 self-start active:shadow-[inset_3px_3px_6px_#c8d0e7] transition-all duration-150"
                  >
                    <Upload className="w-3.5 h-3.5 stroke-[2.5]" />
                    Open Upload Dialog
                  </button>
                </div>

              </div>

              {/* Bottom Row: Card Widget & Design Principles Summary */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Card Widget */}
                <div className="md:col-span-5 bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50 flex flex-col justify-center">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                    Card Widget (Neumorphic)
                  </h4>

                  <div className="bg-[#EEF2F6] border border-white/40 p-5 rounded-2xl shadow-[inset_2.5px_2.5px_5px_#c8d0e7,inset_-2.5px_-2.5px_5px_#ffffff] flex flex-col justify-between h-[135px]">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Documents</span>
                      <button className="text-slate-400 hover:text-slate-600 transition p-1 rounded-lg shadow-[2.5px_2.5px_5px_#c8d0e7,-2.5px_-2.5px_5px_#ffffff] border border-white/50 active:shadow-[inset_1.5px_1.5px_3px_#c8d0e7] bg-[#EEF2F6]">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EEF2F6] shadow-[2.5px_2.5px_5px_#c8d0e7,-2.5px_-2.5px_5px_#ffffff] border border-white/60 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-[#02A74B]" />
                      </div>
                      <div>
                        <span className="text-2xl font-black text-slate-700 leading-none">2,450</span>
                        <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#02A74B] mt-0.5 select-none">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>+12% <span className="text-slate-400 font-medium">from last month</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacing & Padding Metrics */}
                <div className="md:col-span-7 bg-[#EEF2F6] p-6 rounded-3xl shadow-[5px_5px_10px_#c8d0e7,-5px_-5px_10px_#ffffff] border border-white/50 flex flex-col justify-between text-xs text-slate-500 font-semibold leading-relaxed">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                      Card Specifications (Neumorphic)
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b border-white/10 pb-1.5">
                        <span>Card Radius:</span>
                        <strong className="text-slate-700">16px</strong>
                      </li>
                      <li className="flex justify-between border-b border-white/10 pb-1.5">
                        <span>Padding:</span>
                        <strong className="text-slate-700">24px</strong>
                      </li>
                      <li className="flex justify-between border-b border-white/10 pb-1.5">
                        <span>Shadow:</span>
                        <strong className="text-slate-700">Inset Soft UI configuration</strong>
                      </li>
                      <li className="flex justify-between pb-0">
                        <span>Layout Alignment:</span>
                        <strong className="text-[#02A74B]">Grid Spacing MD (16px)</strong>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Modal Dialog Mockup overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-[600px] bg-[#EEF2F6] rounded-3xl shadow-[15px_15px_30px_rgba(163,177,198,0.45),-15px_-15px_30px_#ffffff] border border-white/60 overflow-hidden flex flex-col text-left"
              style={{ padding: "32px" }}
            >

              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-white/20">
                <div>
                  <h3 className="text-lg font-black text-slate-800">Upload Document</h3>
                  <p className="text-xs text-slate-400 font-bold mt-0.5">Add new validation dossiers in Neumorphic frame</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition p-1.5 rounded-xl shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] hover:shadow-[inset_2.5px_2.5px_5px_#c8d0e7] border border-white/40 bg-[#EEF2F6]"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Body */}
              <div className="py-6 space-y-4">

                {uploadStatus === "idle" && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border border-transparent hover:border-[#02A74B]/20 bg-[#EEF2F6] shadow-[inset_4px_4px_8px_#c8d0e7,inset_-4px_-4px_8px_#ffffff] rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition duration-200"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                    />
                    <div className="w-12 h-12 rounded-xl bg-[#EEF2F6] shadow-[2.5px_2.5px_5px_#c8d0e7,-2.5px_-2.5px_5px_#ffffff] flex items-center justify-center border border-white/50 mb-3 shrink-0">
                      <Upload className="w-6 h-6 text-slate-400" />
                    </div>
                    {selectedFile ? (
                      <div className="text-center select-none">
                        <p className="text-xs font-bold text-slate-700">{selectedFile.name}</p>
                        <p className="text-[10px] text-slate-400 mt-1 font-mono">{(selectedFile.size / 1024).toFixed(1)} KB &bull; Click to change</p>
                      </div>
                    ) : (
                      <div className="text-center select-none">
                        <p className="text-xs font-bold text-slate-600">Drag and drop files here</p>
                        <p className="text-[10px] text-[#02A74B] mt-1 font-black">or Browse Files</p>
                      </div>
                    )}
                  </div>
                )}

                {uploadStatus === "uploading" && (
                  <div className="p-8 border border-white/40 bg-[#EEF2F6] shadow-[inset_3px_3px_6px_#c8d0e7,inset_-3px_-3px_6px_#ffffff] rounded-2xl space-y-4">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>Uploading dossier...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-[#EEF2F6] shadow-[inset_1.5px_1.5px_3px_rgba(0,0,0,0.1)] rounded-full h-2 overflow-hidden border border-white/20">
                      <div className="bg-[#02A74B] h-2 rounded-full transition-all duration-200" style={{ width: `${uploadProgress}%` }} />
                    </div>
                  </div>
                )}

                {uploadStatus === "success" && (
                  <div className="p-8 bg-[#EBF7DF] border border-[#02A74B]/20 rounded-2xl shadow-[inset_2.5px_2.5px_5px_rgba(2,167,75,0.05)] flex flex-col items-center text-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#02A74B] flex items-center justify-center text-white shadow-sm">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#017536]">Upload Complete!</h4>
                      <p className="text-[10.5px] text-slate-500 font-semibold mt-1">Validation files were parsed successfully.</p>
                    </div>
                  </div>
                )}

                <div className="text-[10px] text-slate-400 font-bold leading-normal flex gap-4 select-none">
                  <span>Width: <strong className="text-slate-500">600px</strong></span>
                  <span>Padding: <strong className="text-slate-500">32px</strong></span>
                  <span>Border Radius: <strong className="text-slate-500">20px</strong></span>
                </div>

              </div>

              {/* Actions Footer */}
              <div className="flex justify-end gap-3 pt-4 border-t border-white/20">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="h-10 px-5 rounded-xl bg-[#EEF2F6] text-slate-600 hover:text-slate-800 font-bold text-xs shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] border border-white/50 hover:shadow-[inset_2px_2px_4px_#c8d0e7] transition duration-150"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpload}
                  disabled={!selectedFile || uploadStatus === "uploading" || uploadStatus === "success"}
                  className="h-10 px-5 rounded-xl bg-[#02A74B] text-white font-bold text-xs shadow-[3px_3px_6px_#c8d0e7,-3px_-3px_6px_#ffffff] border border-[#02A74B]/20 hover:bg-[#018E40] transition duration-150 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none disabled:border-transparent disabled:cursor-not-allowed"
                >
                  Upload
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
