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
  const [selectedRows, setSelectedRows] = useState<number[]>([0, 2, 3]); // Initial index selection matching image (Aadhar, Address Proof, Bank Statement)

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
            // Append success alert dynamically or show message
            setAlerts(prevAlerts => [
              { id: Date.now(), type: "success", title: "Document Uploaded Successfully", desc: `"${selectedFile.name}" has been uploaded and validation triggered.` },
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
    <section className="mt-24 border-t border-slate-200/80 pt-20 pb-12 bg-white rounded-[40px] px-8 md:px-12 shadow-[0_-15px_40px_rgba(0,0,0,0.02)] overflow-hidden">

      {/* Toast Notification for Clipboard Copy */}
      <AnimatePresence>
        {copiedText && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl text-sm font-semibold border border-slate-800"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Copied {copiedText} to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Design System Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-8 mb-12">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#02A74B] bg-[#E6F8EE] px-3.5 py-1.5 rounded-full">
            UI Blueprint
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Design System
          </h2>
          <p className="text-slate-500 font-medium text-sm mt-1">
            For React MUI Application &bull; Primary Color: <span className="font-bold text-[#02A74B]">#02A74B</span> &bull; Font Family: <span className="font-semibold text-slate-800">Inter</span>
          </p>
        </div>
        <button
          onClick={resetAlerts}
          className="mt-4 md:mt-0 flex items-center gap-2 px-4.5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold text-xs transition duration-200 shadow-sm"
        >
          Reset Interactive State
        </button>
      </div>

      {/* Grid of Sections */}
      <div className="grid gap-16">

        {/* Section 1: Colors */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
            <span>01</span> &bull; COLOR SCALES & PALETTES
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Primary Color Scale */}
            <div className="lg:col-span-5 bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                Primary Color Scale
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                {[
                  { label: "100", hex: "#E6F8EE" },
                  { label: "200", hex: "#CCF1DD" },
                  { label: "300", hex: "#99E3BB" },
                  { label: "400", hex: "#66D598" },
                  { label: "500", hex: "#02A74B", primary: true },
                  { label: "600", hex: "#018E40" },
                  { label: "700", hex: "#017536" },
                  { label: "800", hex: "#015C2B" },
                  { label: "900", hex: "#014320" }
                ].map((color) => (
                  <button
                    key={color.label}
                    onClick={() => copyToClipboard(color.hex)}
                    className="group flex flex-col items-center p-2 rounded-2xl hover:bg-white hover:shadow-md transition duration-200 text-left border border-transparent hover:border-slate-100"
                  >
                    <div
                      className="w-12 h-12 rounded-xl shadow-inner relative flex items-center justify-center"
                      style={{ backgroundColor: color.hex }}
                    >
                      <Copy className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-75 transition-opacity" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 mt-2">{color.label}</span>
                    <span className="text-[9px] font-mono text-slate-400 uppercase">{color.hex}</span>
                    {color.primary && <span className="text-[8px] font-bold text-[#02A74B] uppercase tracking-wider scale-90 mt-0.5">Primary</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Neutral Palette */}
            <div className="lg:col-span-4 bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
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
                    className="group flex flex-col items-center p-1.5 rounded-xl hover:bg-white hover:shadow-sm transition duration-200"
                  >
                    <div
                      className="w-8 h-8 rounded-lg shadow-inner flex items-center justify-center"
                      style={{ backgroundColor: color.hex }}
                    >
                      <Copy className={`w-3 h-3 ${parseInt(color.label) > 400 ? 'text-white' : 'text-slate-800'} opacity-0 group-hover:opacity-75 transition-opacity`} />
                    </div>
                    <span className="text-[9px] font-bold text-slate-700 mt-1">{color.label}</span>
                    <span className="text-[8px] font-mono text-slate-400 scale-90 uppercase mt-0.5">{color.hex}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="lg:col-span-3 bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                Semantic Colors
              </h4>
              <div className="space-y-3">
                {[
                  { name: "Success", items: [{ l: "Light", h: "#EBF7DF" }, { l: "Main", h: "#02A74B" }, { l: "Dark", h: "#017536" }] },
                  { name: "Warning", items: [{ l: "Light", h: "#FFF7D6" }, { l: "Main", h: "#F5A524" }, { l: "Dark", h: "#C77807" }] },
                  { name: "Error", items: [{ l: "Light", h: "#FFEAEA" }, { l: "Main", h: "#E53E3E" }, { l: "Dark", h: "#C62828" }] },
                  { name: "Info", items: [{ l: "Light", h: "#EBF4FD" }, { l: "Main", h: "#2196F3" }, { l: "Dark", h: "#1565C0" }] }
                ].map((semantic) => (
                  <div key={semantic.name} className="flex items-center justify-between bg-white p-2.5 rounded-2xl border border-slate-100 shadow-sm">
                    <span className="text-xs font-bold text-slate-800 w-16">{semantic.name}</span>
                    <div className="flex gap-2">
                      {semantic.items.map((item) => (
                        <button
                          key={item.l}
                          onClick={() => copyToClipboard(item.h)}
                          title={`${semantic.name} ${item.l}: ${item.h}`}
                          className="group relative flex items-center justify-center w-8 h-8 rounded-lg shadow-sm hover:scale-105 transition-transform"
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
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
            <span>02</span> &bull; TYPOGRAPHY, SPACING & LAYOUT SYSTEM
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Typography Scale */}
            <div className="lg:col-span-6 bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                Typography Scale (Inter)
              </h4>
              <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
                {[
                  { tag: "H1", desc: "48px / Bold (700)", text: "The quick brown fox", class: "text-[48px] font-bold" },
                  { tag: "H2", desc: "40px / Bold (700)", text: "The quick brown fox", class: "text-[40px] font-bold" },
                  { tag: "H3", desc: "32px / Semi Bold (600)", text: "The quick brown fox", class: "text-[32px] font-semibold" },
                  { tag: "H4", desc: "28px / Semi Bold (600)", text: "The quick brown fox", class: "text-[28px] font-semibold" },
                  { tag: "H5", desc: "24px / Semi Bold (600)", text: "The quick brown fox", class: "text-[24px] font-semibold" },
                  { tag: "H6", desc: "20px / Semi Bold (600)", text: "The quick brown fox", class: "text-[20px] font-semibold" },
                  { tag: "Body XL", desc: "18px / Regular (400)", text: "The quick brown fox", class: "text-[18px] font-normal" },
                  { tag: "Body L", desc: "16px / Regular (400)", text: "The quick brown fox", class: "text-[16px] font-normal" },
                  { tag: "Body M", desc: "14px / Regular (400)", text: "The quick brown fox", class: "text-[14px] font-normal" },
                  { tag: "Body S", desc: "13px / Regular (400)", text: "The quick brown fox", class: "text-[13px] font-normal" },
                  { tag: "Caption", desc: "12px / Regular (400)", text: "The quick brown fox", class: "text-[12px] font-normal text-slate-500" }
                ].map((item) => (
                  <div key={item.tag} className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-slate-200/40">
                    <span className="text-[11px] font-mono font-bold text-slate-400 sm:w-24 shrink-0">{item.tag} <span className="font-normal text-[9px] block sm:inline">({item.desc})</span></span>
                    <span className={`text-slate-800 ${item.class} leading-tight truncate`}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacing & Borders */}
            <div className="lg:col-span-3 space-y-6">

              {/* Spacing system */}
              <div className="bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
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
                    <div key={space.label} className="flex items-center justify-between text-xs font-semibold text-slate-700">
                      <div className="w-10">
                        <span className="font-bold">{space.label}</span>
                        <span className="text-[10px] font-mono text-slate-400 block">{space.value}</span>
                      </div>
                      <div className="flex-1 mx-4 bg-slate-200 rounded-sm relative h-3 flex items-center justify-start">
                        <div className={`bg-[#02A74B]/70 rounded-sm ${space.size}`} />
                      </div>
                      <span className="text-[10px] text-slate-400 text-right w-28 truncate">{space.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Radius & Elevation */}
            <div className="lg:col-span-3 space-y-6">

              {/* Border Radius */}
              <div className="bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Border Radius
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { l: "Small", v: "8px", r: "rounded-lg" },
                    { l: "Medium", v: "12px", r: "rounded-xl" },
                    { l: "Large", v: "16px", r: "rounded-2xl" },
                    { l: "XL", v: "20px", r: "rounded-3xl" },
                    { l: "Pill", v: "999px", r: "rounded-full" }
                  ].map((rad) => (
                    <div key={rad.l} className="flex flex-col items-center p-3 bg-white border border-slate-200/50 rounded-2xl shadow-sm">
                      <div className={`w-12 h-12 border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center ${rad.r}`} />
                      <span className="text-[11px] font-bold text-slate-800 mt-2">{rad.l}</span>
                      <span className="text-[9px] font-mono text-slate-400">{rad.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Elevations */}
              <div className="bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Elevation (Shadow)
                </h4>
                <div className="space-y-3">
                  {[
                    { level: "Level 1 (Cards)", value: "0 1px 2px rgba(0,0,0,0.06)", shadow: "shadow-[0_1px_2px_rgba(0,0,0,0.06)]" },
                    { level: "Level 2 (Hover)", value: "0 4px 12px rgba(0,0,0,0.08)", shadow: "shadow-[0_4px_12px_rgba(0,0,0,0.08)]" },
                    { level: "Level 3 (Dialogs)", value: "0 10px 30px rgba(0,0,0,0.12)", shadow: "shadow-[0_10px_30px_rgba(0,0,0,0.12)]" }
                  ].map((shadow) => (
                    <div
                      key={shadow.level}
                      className={`p-3 bg-white rounded-xl border border-slate-100 flex justify-between items-center transition duration-300 hover:-translate-y-0.5 ${shadow.shadow}`}
                    >
                      <div className="text-[11px]">
                        <p className="font-bold text-slate-800">{shadow.level}</p>
                        <p className="font-mono text-[9px] text-slate-400">{shadow.value}</p>
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
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
            <span>03</span> &bull; INTERACTIVE UI ELEMENTS (BUTTONS & INPUTS)
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Buttons Component Panel */}
            <div className="lg:col-span-6 bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                Buttons System
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Column 1: Primary Buttons */}
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase text-slate-400 border-b pb-2">Primary Button</h5>

                  {/* Default */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Default</label>
                    <button className="w-full h-11 px-6 bg-[#02A74B] text-white font-semibold text-sm rounded-xl hover:bg-[#018E40] transition duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.06)] active:bg-[#015C2B]">
                      Button
                    </button>
                  </div>

                  {/* Hover visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Hover State</label>
                    <button className="w-full h-11 px-6 bg-[#018E40] text-white font-semibold text-sm rounded-xl transition duration-200">
                      Button
                    </button>
                  </div>

                  {/* Active Visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Active State</label>
                    <button className="w-full h-11 px-6 bg-[#015C2B] text-white font-semibold text-sm rounded-xl transition duration-200">
                      Button
                    </button>
                  </div>

                  {/* Disabled Visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Disabled</label>
                    <button disabled className="w-full h-11 px-6 bg-[#E0E0E0] text-[#BDBDBD] font-semibold text-sm rounded-xl cursor-not-allowed">
                      Button
                    </button>
                  </div>
                </div>

                {/* Column 2: Secondary Buttons */}
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase text-slate-400 border-b pb-2">Secondary Button</h5>

                  {/* Default */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Default</label>
                    <button className="w-full h-11 px-6 bg-transparent border border-[#02A74B] text-[#02A74B] font-semibold text-sm rounded-xl hover:bg-[#E6F8EE] transition duration-200">
                      Button
                    </button>
                  </div>

                  {/* Hover visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Hover State</label>
                    <button className="w-full h-11 px-6 bg-[#E6F8EE] border border-[#02A74B] text-[#02A74B] font-semibold text-sm rounded-xl transition duration-200">
                      Button
                    </button>
                  </div>

                  {/* Active Visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Active State</label>
                    <button className="w-full h-11 px-6 bg-[#CCF1DD] border border-[#02A74B] text-[#02A74B] font-semibold text-sm rounded-xl transition duration-200">
                      Button
                    </button>
                  </div>

                  {/* Disabled Visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Disabled</label>
                    <button disabled className="w-full h-11 px-6 bg-transparent border border-[#E0E0E0] text-[#BDBDBD] font-semibold text-sm rounded-xl cursor-not-allowed">
                      Button
                    </button>
                  </div>
                </div>

                {/* Column 3: Ghost Buttons */}
                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold uppercase text-slate-400 border-b pb-2">Ghost Button</h5>

                  {/* Default */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Default</label>
                    <button className="w-full h-11 px-6 bg-transparent text-[#02A74B] font-semibold text-sm rounded-xl hover:bg-[#E6F8EE] transition duration-200">
                      Button
                    </button>
                  </div>

                  {/* Hover visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Hover State</label>
                    <button className="w-full h-11 px-6 bg-[#E6F8EE] text-[#02A74B] font-semibold text-sm rounded-xl transition duration-200">
                      Button
                    </button>
                  </div>

                  {/* Active Visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Active State</label>
                    <button className="w-full h-11 px-6 bg-[#CCF1DD] text-[#02A74B] font-semibold text-sm rounded-xl transition duration-200">
                      Button
                    </button>
                  </div>

                  {/* Disabled Visual */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block mb-1">Disabled</label>
                    <button disabled className="w-full h-11 px-6 bg-transparent text-[#BDBDBD] font-semibold text-sm rounded-xl cursor-not-allowed">
                      Button
                    </button>
                  </div>
                </div>

              </div>

              {/* Button Sizes */}
              <div className="mt-8 pt-6 border-t border-slate-200/40">
                <h5 className="text-[10px] font-bold uppercase text-slate-400 mb-4">Button Sizes</h5>
                <div className="flex flex-col sm:flex-row sm:items-end gap-6">
                  <div>
                    <button className="h-12 px-7 bg-[#02A74B] text-white font-semibold text-base rounded-xl shadow-sm hover:bg-[#018E40] transition">
                      Large Button
                    </button>
                    <p className="text-[10px] font-mono text-slate-400 mt-1.5">Height: 48px | Padding: 0 28px | Font: 16px</p>
                  </div>
                  <div>
                    <button className="h-11 px-6 bg-[#02A74B] text-white font-semibold text-sm rounded-xl shadow-sm hover:bg-[#018E40] transition">
                      Medium Button
                    </button>
                    <p className="text-[10px] font-mono text-slate-400 mt-1.5">Height: 44px | Padding: 0 24px | Font: 14px</p>
                  </div>
                  <div>
                    <button className="h-9 px-4 bg-[#02A74B] text-white font-semibold text-[13px] rounded-lg shadow-sm hover:bg-[#018E40] transition">
                      Small Button
                    </button>
                    <p className="text-[10px] font-mono text-slate-400 mt-1.5">Height: 36px | Padding: 0 16px | Font: 13px</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Input Fields Component Panel */}
            <div className="lg:col-span-6 bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                Input Controls
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">

                {/* Default Text Input */}
                <div className="space-y-1">
                  <label className="text-[13px] font-medium text-slate-500">Label</label>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter text here"
                    className="w-full h-11 px-4 bg-white border border-slate-200 text-slate-800 rounded-xl text-sm focus:outline-none focus:border-[#02A74B] transition duration-200 shadow-sm"
                  />
                  <span className="text-[12px] font-normal text-slate-400 block">Helper text goes here</span>
                </div>

                {/* Focus State Simulated */}
                <div className="space-y-1">
                  <label className="text-[13px] font-medium text-[#02A74B]">Focus</label>
                  <input
                    type="text"
                    value={focusedValue}
                    onChange={(e) => setFocusedValue(e.target.value)}
                    placeholder="Enter text here"
                    className="w-full h-11 px-4 bg-white border-2 border-[#02A74B] text-slate-800 rounded-xl text-sm focus:outline-none transition duration-200 shadow-sm"
                  />
                  <span className="text-[12px] font-normal text-[#02A74B] block font-medium">Helper text goes here</span>
                </div>

                {/* Error State Simulated */}
                <div className="space-y-1">
                  <label className="text-[13px] font-medium text-red-500">Error</label>
                  <input
                    type="text"
                    value={errorValue}
                    onChange={(e) => setErrorValue(e.target.value)}
                    placeholder="Enter text here"
                    className="w-full h-11 px-4 bg-white border border-red-500 text-slate-800 rounded-xl text-sm focus:outline-none focus:border-red-500 transition duration-200 shadow-sm"
                  />
                  <span className="text-[12px] font-normal text-red-500 block">Error message here</span>
                </div>

                {/* Disabled Input */}
                <div className="space-y-1">
                  <label className="text-[13px] font-medium text-slate-400">Disabled</label>
                  <input
                    disabled
                    type="text"
                    placeholder="Enter text here"
                    className="w-full h-11 px-4 bg-slate-100 border border-slate-200 text-slate-400 rounded-xl text-sm cursor-not-allowed shadow-none"
                  />
                  <span className="text-[12px] font-normal text-slate-300 block">Disabled helper text</span>
                </div>

                {/* Text Field with Icon */}
                <div className="space-y-1">
                  <label className="text-[13px] font-medium text-slate-500 font-medium">Search Field</label>
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                    <input
                      type="text"
                      placeholder="Search documents..."
                      className="w-full h-11 pl-11 pr-4 bg-white border border-slate-200 text-slate-800 rounded-xl text-sm focus:outline-none focus:border-[#02A74B] transition duration-200 shadow-sm"
                    />
                  </div>
                </div>

                {/* Select Dropdown */}
                <div className="space-y-1">
                  <label className="text-[13px] font-medium text-slate-500">Select Dropdown</label>
                  <div className="relative">
                    <select
                      value={dropdownValue}
                      onChange={(e) => setDropdownValue(e.target.value)}
                      className="w-full h-11 px-4 pr-10 bg-white border border-slate-200 text-slate-800 rounded-xl text-sm focus:outline-none focus:border-[#02A74B] transition duration-200 appearance-none shadow-sm font-semibold"
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
                <div className="space-y-1">
                  <label className="text-[13px] font-medium text-slate-500">Multi Select</label>
                  <div className="relative flex items-center gap-1.5 flex-wrap w-full min-h-11 px-3 py-2 bg-white border border-slate-200 text-slate-800 rounded-xl text-sm focus-within:border-[#02A74B] transition duration-200 shadow-sm">
                    {multiSelect.map((opt) => (
                      <span key={opt} className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 font-semibold px-2 py-1 rounded-lg text-xs border border-slate-200">
                        {opt}
                        <button
                          onClick={() => setMultiSelect(multiSelect.filter(o => o !== opt))}
                          className="hover:text-red-500 transition duration-150"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    {multiSelect.length < 3 && (
                      <button
                        onClick={() => {
                          const missing = ["Option 1", "Option 2", "Option 3"].find(o => !multiSelect.includes(o));
                          if (missing) setMultiSelect([...multiSelect, missing]);
                        }}
                        className="text-xs text-[#02A74B] font-bold flex items-center gap-0.5 ml-auto hover:underline"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add
                      </button>
                    )}
                  </div>
                </div>

                {/* Date Picker */}
                <div className="space-y-1">
                  <label className="text-[13px] font-medium text-slate-500">Date Picker</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={dateValue}
                      onChange={(e) => setDateValue(e.target.value)}
                      className="w-full h-11 px-4 bg-white border border-slate-200 text-slate-800 rounded-xl text-sm focus:outline-none focus:border-[#02A74B] transition duration-200 shadow-sm font-semibold uppercase"
                    />
                  </div>
                </div>

              </div>

              {/* Toggles, Checkbox, Switch Row */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200/40">

                {/* Switch */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase text-slate-400 block">Switch</span>
                  <div className="flex flex-col gap-2.5">
                    <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-slate-500 font-medium">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={isSwitchActive}
                          onChange={(e) => setIsSwitchActive(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`block w-10 h-6 rounded-full transition-colors duration-200 ${isSwitchActive ? 'bg-[#02A74B]' : 'bg-slate-300'}`} />
                        <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ${isSwitchActive ? 'transform translate-x-4' : ''}`} />
                      </div>
                      <span className="font-semibold text-slate-700">{isSwitchActive ? "Active" : "Inactive"}</span>
                    </label>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase text-slate-400 block">Checkbox</span>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-semibold select-none">
                      <input
                        type="checkbox"
                        checked={checkedBox}
                        onChange={(e) => setCheckedBox(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition ${checkedBox ? 'bg-[#02A74B] border-[#02A74B] text-white' : 'border-slate-300 bg-white'}`}>
                        {checkedBox && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span>{checkedBox ? "Checked" : "Unchecked"}</span>
                    </label>
                  </div>
                </div>

                {/* Radio */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase text-slate-400 block">Radio Button</span>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-semibold select-none">
                      <input
                        type="radio"
                        name="interactive-radio"
                        checked={selectedRadio === "selected"}
                        onChange={() => setSelectedRadio("selected")}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${selectedRadio === "selected" ? 'border-[#02A74B]' : 'border-slate-300 bg-white'}`}>
                        {selectedRadio === "selected" && <div className="w-2.5 h-2.5 rounded-full bg-[#02A74B]" />}
                      </div>
                      <span>Selected</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-semibold select-none">
                      <input
                        type="radio"
                        name="interactive-radio"
                        checked={selectedRadio === "unselected"}
                        onChange={() => setSelectedRadio("unselected")}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${selectedRadio === "unselected" ? 'border-[#02A74B]' : 'border-slate-300 bg-white'}`}>
                        {selectedRadio === "unselected" && <div className="w-2.5 h-2.5 rounded-full bg-[#02A74B]" />}
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
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
            <span>04</span> &bull; ADVANCED INTERACTIVE COMPONENTS
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Column 1: Alerts & Accordions */}
            <div className="lg:col-span-5 space-y-6">

              {/* Alerts container */}
              <div className="bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 flex justify-between items-center">
                  <span>Alert Notifications</span>
                  {alerts.length === 0 && (
                    <button onClick={resetAlerts} className="text-[9px] font-bold text-[#02A74B] uppercase tracking-wider hover:underline">
                      Show All
                    </button>
                  )}
                </h4>

                <div className="space-y-3">
                  <AnimatePresence>
                    {alerts.map((alert) => {
                      let bg = "bg-slate-50 text-slate-800 border-slate-200";
                      let icon = <Info className="w-4 h-4 text-slate-500" />;

                      if (alert.type === "success") {
                        bg = "bg-[#EBF7DF] text-[#017536] border-[#CCF1DD]/40";
                        icon = <CheckCircle2 className="w-4 h-4 text-[#02A74B]" />;
                      } else if (alert.type === "error") {
                        bg = "bg-[#FFEAEA] text-[#C62828] border-red-200/40";
                        icon = <AlertCircle className="w-4 h-4 text-[#E53E3E]" />;
                      } else if (alert.type === "warning") {
                        bg = "bg-[#FFF7D6] text-[#C77807] border-amber-200/40";
                        icon = <AlertTriangle className="w-4 h-4 text-[#F5A524]" />;
                      } else if (alert.type === "info") {
                        bg = "bg-[#EBF4FD] text-[#1565C0] border-blue-200/40";
                        icon = <Info className="w-4 h-4 text-[#2196F3]" />;
                      }

                      return (
                        <motion.div
                          key={alert.id}
                          layout
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className={`flex items-start gap-3 p-3.5 rounded-xl border text-left shadow-sm ${bg}`}
                        >
                          <div className="mt-0.5 shrink-0">{icon}</div>
                          <div className="flex-1">
                            <h5 className="text-xs font-bold leading-tight">{alert.title}</h5>
                            <p className="text-[10.5px] leading-snug mt-0.5 opacity-90">{alert.desc}</p>
                          </div>
                          <button
                            onClick={() => dismissAlert(alert.id)}
                            className="text-slate-400 hover:text-slate-600 transition shrink-0 ml-1.5 p-0.5 rounded-md hover:bg-black/5"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>

              {/* Accordion container */}
              <div className="bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Accordion System
                </h4>

                <div className="border border-slate-200/60 rounded-2xl overflow-hidden bg-white shadow-sm">
                  {/* Accordion Header */}
                  <button
                    onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-slate-800 text-sm hover:bg-slate-50 transition duration-150 select-none"
                  >
                    <span>Validation Documents</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isAccordionOpen ? 'transform rotate-180' : ''}`} />
                  </button>

                  {/* Accordion Body */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isAccordionOpen ? 'max-h-[300px] border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-5 space-y-4">
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                        Upload and validate your documents easily. Supported formats include PDF, JPG, PNG and more.
                      </p>

                      {/* Sub-item checklists */}
                      <div className="space-y-2">
                        {[
                          { name: "ID Proof", status: "Approved", color: "bg-[#EBF7DF] text-[#017536] border-[#02A74B]/20" },
                          { name: "Address Proof", status: "Pending", color: "bg-[#FFF7D6] text-[#C77807] border-[#F5A524]/20" },
                          { name: "Bank Statement", status: "Approved", color: "bg-[#EBF7DF] text-[#017536] border-[#02A74B]/20" }
                        ].map((item) => (
                          <div key={item.name} className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50 shadow-inner">
                            <span className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                              <FileText className="w-3.5 h-3.5 text-slate-400" />
                              {item.name}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.color}`}>
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
            <div className="lg:col-span-7 bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Interactive Data Table
                </h4>
                <p className="text-slate-400 text-xs font-semibold mb-6">
                  Select rows to test active highlighting. Selected colors map to the primary system green palette.
                </p>

                <div className="overflow-x-auto border border-slate-200/60 bg-white rounded-2xl shadow-sm">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#F5F5F5] border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                        <th className="p-4 w-12">
                          <label className="flex items-center justify-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedRows.length === tableData.length}
                              onChange={toggleAllRows}
                              className="sr-only"
                            />
                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition ${selectedRows.length === tableData.length ? 'bg-[#02A74B] border-[#02A74B] text-white' : 'border-slate-300 bg-white'}`}>
                              {selectedRows.length === tableData.length && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </label>
                        </th>
                        <th className="p-4 font-semibold">Document Name</th>
                        <th className="p-4 font-semibold">Type</th>
                        <th className="p-4 font-semibold">Status</th>
                        <th className="p-4 font-semibold">Uploaded On</th>
                        <th className="p-4 font-semibold w-12">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {tableData.map((row, index) => {
                        const isSelected = selectedRows.includes(index);
                        let statusColor = "bg-slate-100 text-slate-600";
                        if (row.status === "Approved") statusColor = "bg-[#EBF7DF] text-[#017536]";
                        if (row.status === "Pending") statusColor = "bg-[#FFF7D6] text-[#C77807]";
                        if (row.status === "Rejected") statusColor = "bg-[#FFEAEA] text-[#C62828]";

                        return (
                          <tr
                            key={row.name}
                            onClick={() => toggleRow(index)}
                            style={{ height: "56px" }}
                            className={`cursor-pointer transition duration-150 select-none ${isSelected
                              ? 'bg-[#CCF1DD] hover:bg-[#CCF1DD]'
                              : 'hover:bg-[#EBF8EE] bg-white'
                              }`}
                          >
                            <td className="p-4" onClick={(e) => e.stopPropagation()}>
                              <label className="flex items-center justify-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={isSelected}
                                  onChange={() => toggleRow(index)}
                                  className="sr-only"
                                />
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition ${isSelected ? 'bg-[#02A74B] border-[#02A74B] text-white' : 'border-slate-300 bg-white'}`}>
                                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                              </label>
                            </td>
                            <td className="p-4 font-bold text-slate-800 flex items-center gap-2 mt-2 truncate">
                              <FileText className="w-4 h-4 text-slate-400 shrink-0" />
                              {row.name}
                            </td>
                            <td className="p-4 font-medium text-slate-500">{row.type}</td>
                            <td className="p-4">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusColor}`}>
                                {row.status}
                              </span>
                            </td>
                            <td className="p-4 font-medium text-slate-400">{row.date}</td>
                            <td className="p-4" onClick={(e) => e.stopPropagation()}>
                              <button className="text-slate-400 hover:text-slate-600 transition p-1 hover:bg-slate-100 rounded-md">
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
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-200/40 text-[11px] text-slate-400 font-semibold uppercase">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#F5F5F5] border border-slate-200 rounded-sm" />
                  <span>Header Background: <strong className="text-slate-700">#F5F5F5</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#EBF8EE] border border-[#02A74B]/10 rounded-sm" />
                  <span>Hover: <strong className="text-slate-700">#EBF8EE</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#CCF1DD] border border-[#02A74B]/20 rounded-sm" />
                  <span>Selected: <strong className="text-slate-700">#CCF1DD</strong></span>
                </div>
                <div>
                  <span>Row Height: <strong className="text-slate-700">56px</strong></span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 5: Complex Layout components */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
            <span>05</span> &bull; SYSTEM APPLICATION WIDGETS
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Column 2: Tabs, Dialog trigger and Card widget */}
            <div className="lg:col-span-8 space-y-8 flex flex-col justify-between">

              {/* Top Row: Tabs Container & Dialog Trigger */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Tabs widget */}
                <div className="bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between h-[150px]">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                      Navigation Tabs
                    </h4>
                    <div className="flex border-b border-slate-200">
                      {["Dashboard", "Documents", "Reports"].map((tab) => {
                        const isActive = activeTab === tab;
                        return (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-4 py-2.5 text-xs font-bold transition duration-200 ${isActive ? 'text-[#02A74B]' : 'text-slate-400 hover:text-slate-700'
                              }`}
                          >
                            {tab}
                            {isActive && (
                              <motion.div
                                layoutId="activeTabIndicator"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#02A74B]"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 font-semibold mt-2 uppercase">
                    Active tab text: <span className="text-slate-800">#02A74B</span> &bull; Indicator: <span className="text-slate-800">2px</span>
                  </p>
                </div>

                {/* Dialog / Modal Trigger container */}
                <div className="bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between h-[150px]">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
                      Dialog / Modal Component
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold mb-4 leading-normal">
                      Click the button below to trigger the interactive file upload upload dialog mockup.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Row: Card Widget & Design Principles Summary */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Card Widget */}
                <div className="md:col-span-5 bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-center">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                    Card Widget
                  </h4>

                  <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm flex flex-col justify-between h-[130px]">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Documents</span>
                      <button className="text-slate-400 hover:text-slate-600 transition p-0.5 hover:bg-slate-100 rounded">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#E6F8EE] flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#02A74B]" />
                      </div>
                      <div>
                        <span className="text-2xl font-black text-slate-800 leading-none">2,450</span>
                        <div className="flex items-center gap-1 text-[11px] font-bold text-[#02A74B] mt-0.5">
                          <TrendingUp className="w-3 h-3" />
                          <span>+12% <span className="text-slate-400 font-normal">from last month</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacing & Padding Metrics */}
                <div className="md:col-span-7 bg-[#FAFAFA] p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-between text-xs text-slate-500 font-semibold leading-relaxed">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
                      Card Specifications
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b border-slate-200/40 pb-1.5">
                        <span>Card Radius:</span>
                        <strong className="text-slate-700">16px</strong>
                      </li>
                      <li className="flex justify-between border-b border-slate-200/40 pb-1.5">
                        <span>Padding:</span>
                        <strong className="text-slate-700">24px</strong>
                      </li>
                      <li className="flex justify-between border-b border-slate-200/40 pb-1.5">
                        <span>Shadow:</span>
                        <strong className="text-slate-700">0 1px 2px rgba(0,0,0,0.06)</strong>
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
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-[600px] bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden flex flex-col text-left"
              style={{ padding: "32px" }}
            >

              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-black text-slate-800">Upload Document</h3>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">Add new validation dossiers to the enterprise repository</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition p-1.5 hover:bg-slate-50 rounded-xl"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="py-6 space-y-4">

                {uploadStatus === "idle" && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-200 hover:border-[#02A74B] bg-slate-50/50 hover:bg-[#E6F8EE]/20 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition duration-200"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                    />
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-slate-400 mb-3">
                      <Upload className="w-6 h-6 text-slate-400" />
                    </div>
                    {selectedFile ? (
                      <div className="text-center">
                        <p className="text-xs font-bold text-slate-800">{selectedFile.name}</p>
                        <p className="text-[10px] text-slate-400 mt-1 font-mono">{(selectedFile.size / 1024).toFixed(1)} KB &bull; Click to change</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <p className="text-xs font-bold text-slate-800">Drag and drop files here</p>
                        <p className="text-[10px] text-[#02A74B] mt-1 font-bold">or Browse Files</p>
                      </div>
                    )}
                  </div>
                )}

                {uploadStatus === "uploading" && (
                  <div className="p-8 border border-slate-100 bg-slate-50 rounded-2xl space-y-4">
                    <div className="flex justify-between text-xs font-semibold text-slate-700">
                      <span>Uploading dossier...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-[#02A74B] h-2 rounded-full transition-all duration-200" style={{ width: `${uploadProgress}%` }} />
                    </div>
                  </div>
                )}

                {uploadStatus === "success" && (
                  <div className="p-8 bg-[#EBF7DF] border border-[#02A74B]/20 rounded-2xl flex flex-col items-center text-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#02A74B] flex items-center justify-center text-white">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#017536]">Upload Complete!</h4>
                      <p className="text-[10.5px] text-slate-500 font-semibold mt-1">Validation files were parsed successfully.</p>
                    </div>
                  </div>
                )}

                <div className="text-[10px] text-slate-400 font-semibold leading-normal flex gap-4">
                  <span>Width: <strong className="text-slate-600">600px</strong></span>
                  <span>Padding: <strong className="text-slate-600">32px</strong></span>
                  <span>Border Radius: <strong className="text-slate-600">20px</strong></span>
                </div>

              </div>

              {/* Actions Footer */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="h-10 px-5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-xs transition duration-150"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpload}
                  disabled={!selectedFile || uploadStatus === "uploading" || uploadStatus === "success"}
                  className="h-10 px-5 rounded-xl bg-[#02A74B] text-white font-bold text-xs hover:bg-[#018E40] transition duration-150 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
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
