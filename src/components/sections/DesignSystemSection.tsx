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
  Check,
  Copy,
  ChevronRight,
  ShieldCheck,
  Bell,
  Clock,
  Zap,
  RefreshCw,
  FolderOpen,
  Filter
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
  const [focusedValue, setFocusedValue] = useState("Focused input state");
  const [errorValue, setErrorValue] = useState("Invalid email format");
  const [isSwitchActive, setIsSwitchActive] = useState(true);
  const [checkedBox, setCheckedBox] = useState(true);
  const [selectedRadio, setSelectedRadio] = useState("selected");
  const [dropdownValue, setDropdownValue] = useState("Option 1");
  const [multiSelect, setMultiSelect] = useState(["Option 1", "Option 2"]);
  const [dateValue, setDateValue] = useState("2026-06-29");


  const [selectedRows, setSelectedRows] = useState<number[]>([0, 2]);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Status indicator cards states
  const [statusCards, setStatusCards] = useState([
    { id: "ARCXDMSO24", name: "Document ARCXDMSO24", status: "Approved" },
    { id: "ARCXDMSO25", name: "Document ARCXDMSO25", status: "Approved" }
  ]);

  const dismissStatusCard = (id: string) => {
    setStatusCards(statusCards.filter(card => card.id !== id));
  };

  const resetStatusCards = () => {
    setStatusCards([
      { id: "ARCXDMSO24", name: "Document ARCXDMSO24", status: "Approved" },
      { id: "ARCXDMSO25", name: "Document ARCXDMSO25", status: "Approved" }
    ]);
  };

  const resetAlerts = () => {
    resetStatusCards();
    setInputValue("");
  };

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

            // Add new approved card to status alerts
            const newId = `ARCXDMS${Math.floor(Math.random() * 90 + 10)}`;
            setStatusCards(prev => [{ id: newId, name: `Document ${newId}`, status: "Approved" }, ...prev]);

          }, 800);
          return 100;
        }
        return prev + 25;
      });
    }, 150);
  };

  // Corrected design system color codes from pixel analysis
  const designSystemColors = [
    { label: "PRIMARY", hex: "#22C55E", desc: "Vibrant Brand Green (Green-500)" },
    { label: "HOVER", hex: "#15803D", desc: "Dark Green Hover Action (Green-700)" },
    { label: "LIGHT BG", hex: "#DCFCE7", desc: "Very Soft Mint Green Background (Green-50)" },
    { label: "BORDER", hex: "#BBF7D0", desc: "Soft Green Border Highlight (Green-100)" },
    { label: "SUCCCESS", hex: "#16A34A", desc: "Validation Approved Accent (Green-600)" },
    { label: "PRIMARY TEXT", hex: "#1E1E1E", desc: "Main Body/Heading Charcoal Gray" },
    { label: "SECONDARY TEXT", hex: "#565B66", desc: "Medium Slate Gray Descriptive Text" },
    { label: "SURFACE", hex: "#FFFFFF", desc: "Card Surface Backgrounds" },
    { label: "PAGE BG", hex: "#F8FAFC", desc: "Overall Dashboard Layout Background (Slate-50)" },
    { label: "TERTIARY TEXT", hex: "#9CA3AF", desc: "Muted Labels & Placeholders (Gray-400)" },
    { label: "ICON BG", hex: "#FFFFFF", desc: "White Icon Backdrops" }
  ];

  // Table rows details
  const tableData = [
    { name: "Aadhar Card.pdf", type: "ID Proof", status: "Approved", date: "12 May 2026" },
    { name: "PAN Card.pdf", type: "ID Proof", status: "Pending", date: "10 May 2026" },
    { name: "Address Proof.pdf", type: "Address Proof", status: "Approved", date: "08 May 2026" },
    { name: "Bank Statement.pdf", type: "Bank Statement", status: "Rejected", date: "05 May 2026" }
  ];

  // Accordion state
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  // Sidebar navigation selection
  const [activeNav, setActiveNav] = useState("Dashboard");

  // Tabs state for showcase
  const [activeTab, setActiveTab] = useState("Documents");

  return (
    <section className="mt-24 text-[#1E1E1E] bg-[#F8FAFC] border border-slate-200/80 rounded-[40px] px-6 md:px-10 py-12 overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
      {/* Toast Notification for Clipboard Copy */}
      <AnimatePresence>
        {copiedText && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 text-xs font-bold bg-[#1E1E1E] text-white px-4 py-3 rounded-full shadow-lg"
          >
            <Check className="w-4 h-4 text-[#22C55E] stroke-[3]" />
            <span>Copied {copiedText} to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Design System Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200/60 pb-8 mb-12">
        <div>
          <span className="inline-block px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#22C55E] bg-[#DCFCE7] border border-[#BBF7D0] rounded-full mb-4">
            B2B SaaS Style Guide
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-[#1E1E1E]">
            DMS Design System
          </h2>
          <p className="text-[#565B66] font-semibold text-xs mt-2 flex flex-wrap gap-x-2 gap-y-1 items-center">
            <span>Revised Image-Aligned Colors</span>
            <span className="text-slate-350">•</span>
            <span>Primary Green: <span className="font-bold text-[#22C55E]">#22C55E</span></span>
            <span className="text-slate-350">•</span>
            <span>Text Accent: <span className="font-bold text-[#1E1E1E]">#1E1E1E</span></span>
            <span className="text-slate-350">•</span>
            <span>Font Family: <span className="font-bold text-slate-800">Inter</span></span>
          </p>
        </div>
        <button
          onClick={resetAlerts}
          className="mt-5 md:mt-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[#565B66] hover:text-[#1E1E1E] font-semibold text-xs transition duration-150 shadow-sm active:scale-98"
        >
          Reset Interactive State
        </button>
      </div>

      {/* Grid of Sections */}
      <div className="grid gap-16">

        {/* Section 1: Colors */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#9CA3AF] mb-6 flex items-center gap-2 select-none">
            <span>01</span> &bull; REVISED BRAND COLORS (SAMPLED HEX CODES)
          </h3>

          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-xs">
            <p className="text-xs text-[#565B66] font-semibold mb-6">
              Exact Hex colors sampled directly from the specification design image pixels.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11 gap-4">
              {designSystemColors.map((color) => (
                <button
                  key={color.label}
                  onClick={() => copyToClipboard(color.hex)}
                  className="group flex flex-col items-center text-center focus:outline-none transition duration-150 active:scale-95"
                >
                  <div
                    className="w-14 h-14 rounded-2xl border border-slate-200/60 shadow-xs relative flex items-center justify-center transition-transform group-hover:scale-105 duration-200"
                    style={{ backgroundColor: color.hex }}
                  >
                    <Copy className={`w-4 h-4 ${color.hex === "#FFFFFF" || color.hex === "#F8FAFC" || color.hex === "#DCFCE7" || color.hex === "#BBF7D0" ? 'text-slate-700' : 'text-white'} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <span className="text-[10px] font-bold text-[#1E1E1E] mt-3 tracking-wide">{color.label}</span>
                  <span className="text-[9px] font-mono text-[#9CA3AF] mt-0.5 uppercase">{color.hex}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Typography */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#9CA3AF] mb-6 flex items-center gap-2 select-none">
            <span>02</span> &bull; TYPOGRAPHY SCALE (INTER)
          </h3>

          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Typeface Spec */}
              <div className="lg:col-span-4 bg-[#F8FAFC] border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between items-center text-center">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#9CA3AF]">Font Scale</span>
                <div className="my-4">
                  <div className="text-7xl font-extrabold text-[#22C55E] select-none tracking-tighter">Aa</div>
                  <div className="text-base font-black text-[#1E1E1E] mt-2 tracking-tight">Inter</div>
                </div>
                <div className="w-full text-[9px] font-mono text-[#565B66] leading-relaxed font-semibold break-all select-none opacity-80">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  1234567890
                </div>
              </div>

              {/* Typography List */}
              <div className="lg:col-span-8 space-y-4 max-h-[350px] overflow-y-auto pr-2 flex flex-col justify-center">
                {[
                  { tag: "H1", desc: "24px / Bold (700)", text: "Document Management System", class: "text-[24px] font-bold font-sans text-[#1E1E1E]" },
                  { tag: "H2", desc: "16px / Semi Bold (600)", text: "Validation Status Monitor", class: "text-[16px] font-semibold font-sans text-[#1E1E1E]" },
                  { tag: "H3", desc: "14px / Medium (500)", text: "Author Approval Workflows", class: "text-[14px] font-medium font-sans text-[#1E1E1E]" },
                  { tag: "P", desc: "12px / Regular (400)", text: "Standardized document repositories for compliance auditing logs.", class: "text-[12px] font-normal font-sans text-[#565B66] leading-relaxed" }
                ].map((item) => (
                  <div key={item.tag} className="flex flex-col pb-3.5 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="text-[9px] font-mono font-bold text-[#9CA3AF] mb-1">{item.tag} &bull; <span className="font-normal">{item.desc}</span></span>
                    <div className={`${item.class} leading-snug`}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Buttons */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#9CA3AF] mb-6 flex items-center gap-2 select-none">
            <span>03</span> &bull; BUTTON ACTIONS SHOWCASE (PILL SHAPE)
          </h3>

          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Primary Button */}
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/60 flex flex-col items-center justify-between text-center gap-4">
                <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Primary Action</span>
                <button className="bg-[#22C55E] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-full shadow-xs transition duration-150 select-none">
                  Primary Button
                </button>
                <code className="text-[10.5px] text-[#565B66] bg-white border border-slate-200 px-2.5 py-1 rounded-md font-mono">
                  bg-[#22C55E] text-white
                </code>
              </div>

              {/* Secondary Button */}
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/60 flex flex-col items-center justify-between text-center gap-4">
                <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Secondary Action</span>
                <button className="bg-[#1E1E1E] hover:bg-black text-white font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-full shadow-xs transition duration-150 select-none">
                  Secondary Button
                </button>
                <code className="text-[10.5px] text-[#565B66] bg-white border border-slate-200 px-2.5 py-1 rounded-md font-mono">
                  bg-[#1E1E1E] text-white
                </code>
              </div>

              {/* Secondary Default */}
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/60 flex flex-col items-center justify-between text-center gap-4">
                <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Secondary Default</span>
                <button className="bg-white hover:bg-slate-50 text-[#1E1E1E] border border-slate-200 font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-full shadow-xs transition duration-150 select-none">
                  Secondary Default
                </button>
                <code className="text-[10.5px] text-[#565B66] bg-white border border-slate-200 px-2.5 py-1 rounded-md font-mono">
                  bg-white border text-dark
                </code>
              </div>
            </div>
          </div>
        </div>


        {/* Section 4: Standard Inputs & Custom Selects */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#9CA3AF] mb-6 flex items-center gap-2 select-none">
            <span>04</span> &bull; REWRITTEN COMPONENT INPUTS (FLAT GRAY BORDERS)
          </h3>

          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Text Input */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#565B66] uppercase tracking-wider block">Default Text Input</label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter document title"
                  className="w-full h-10 px-4 bg-white border border-slate-200 text-[#1E1E1E] rounded-xl text-xs focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E] transition placeholder-[#9CA3AF]"
                />
              </div>

              {/* Focused input */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#22C55E] uppercase tracking-wider block">Focused Input</label>
                <input
                  type="text"
                  value={focusedValue}
                  onChange={(e) => setFocusedValue(e.target.value)}
                  className="w-full h-10 px-4 bg-white border border-[#22C55E] text-[#1E1E1E] rounded-xl text-xs focus:outline-none ring-1 ring-[#22C55E] transition"
                />
              </div>

              {/* Error input */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-red-500 uppercase tracking-wider block">Error State Input</label>
                <input
                  type="text"
                  value={errorValue}
                  onChange={(e) => setErrorValue(e.target.value)}
                  className="w-full h-10 px-4 bg-white border-red-400 text-red-700 rounded-xl text-xs focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                />
              </div>

              {/* Dropdown Select */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#565B66] uppercase tracking-wider block">Select Option</label>
                <div className="relative">
                  <select
                    value={dropdownValue}
                    onChange={(e) => setDropdownValue(e.target.value)}
                    className="w-full h-10 px-4 pr-10 bg-white border border-slate-200 text-[#565B66] rounded-xl text-xs focus:outline-none focus:border-[#22C55E] transition appearance-none font-semibold cursor-pointer"
                  >
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#9CA3AF] absolute right-4 top-3 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 5: Document Alert Status Card */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#9CA3AF] mb-6 flex items-center gap-2 select-none">
            <span>05</span> &bull; REPLICATED STATUS & ALERT WIDGETS
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Status Card Showcase */}
            <div className="lg:col-span-6 bg-white border border-slate-200/80 p-8 rounded-3xl shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#1E1E1E] mb-2">Designed Status Indicator Card</h4>
                <p className="text-xs text-[#565B66] font-semibold mb-6">
                  Exact replication of the document status component from the layout specs.
                </p>

                <div className="space-y-4 min-h-[160px] flex flex-col justify-center">
                  <AnimatePresence>
                    {statusCards.length > 0 ? (
                      statusCards.map((card) => (
                        <motion.div
                          key={card.id}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="bg-[#F8FAFC] border border-slate-200/60 rounded-2xl p-4 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center text-white shadow-xs shrink-0">
                              <Check className="w-5 h-5 stroke-[3]" />
                            </div>
                            <div>
                              <h5 className="text-[13px] font-bold text-[#1E1E1E] leading-tight font-sans">
                                {card.name}
                              </h5>
                              <span className="text-[11px] font-bold text-[#22C55E] mt-0.5 block font-sans">
                                {card.status}
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={() => dismissStatusCard(card.id)}
                            className="w-6 h-6 rounded-full bg-white hover:bg-red-50 text-red-500 border border-slate-100 flex items-center justify-center shadow-xs transition-colors shrink-0"
                          >
                            <X className="w-3.5 h-3.5 stroke-[2.5]" />
                          </button>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-xs text-[#9CA3AF] font-bold">No active document alerts</p>
                        <button
                          onClick={resetStatusCards}
                          className="mt-3 text-[#22C55E] font-bold text-xs uppercase hover:underline"
                        >
                          Recreate Mock Alerts
                        </button>
                      </div>
                    )}
                  </AnimatePresence>
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
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-[520px] bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col text-left"
              style={{ padding: "32px" }}
            >
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-[#1E1E1E]">Upload Validation dossier</h3>
                  <p className="text-[11px] text-[#565B66] font-semibold mt-0.5">Submit verification file logs to compliance database.</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-[#1E1E1E] transition p-1.5 rounded-full hover:bg-slate-100"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Body */}
              <div className="py-6 space-y-4">
                {uploadStatus === "idle" && (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border border-dashed border-slate-300 hover:border-[#22C55E] bg-[#F8FAFC] rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition duration-150"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                    />
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-3 shrink-0 shadow-3xs">
                      <Upload className="w-6 h-6 text-[#9CA3AF]" />
                    </div>
                    {selectedFile ? (
                      <div className="text-center select-none">
                        <p className="text-xs font-bold text-[#1E1E1E]">{selectedFile.name}</p>
                        <p className="text-[10px] text-[#9CA3AF] mt-1 font-mono">{(selectedFile.size / 1024).toFixed(1)} KB &bull; Click to change</p>
                      </div>
                    ) : (
                      <div className="text-center select-none">
                        <p className="text-xs font-bold text-[#565B66]">Drag and drop compliance files here</p>
                        <p className="text-[10px] text-[#22C55E] mt-1 font-black">or Browse Files</p>
                      </div>
                    )}
                  </div>
                )}

                {uploadStatus === "uploading" && (
                  <div className="p-8 bg-[#F8FAFC] border border-slate-200 rounded-2xl space-y-4">
                    <div className="flex justify-between text-xs font-bold text-[#1E1E1E]">
                      <span>Parsing validation logs...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-[#22C55E] h-2 rounded-full transition-all duration-200" style={{ width: `${uploadProgress}%` }} />
                    </div>
                  </div>
                )}

                {uploadStatus === "success" && (
                  <div className="p-8 bg-[#DCFCE7] border border-[#BBF7D0] rounded-2xl flex flex-col items-center text-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center text-white shadow-xs shrink-0">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#16A34A]">File Approved & Stored</h4>
                      <p className="text-[10.5px] text-[#565B66] font-semibold mt-1">Audit log generated and approved in system repository.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions Footer */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-white hover:bg-slate-50 text-[#565B66] border border-slate-200 font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpload}
                  disabled={!selectedFile || uploadStatus === "uploading" || uploadStatus === "success"}
                  className="bg-[#22C55E] hover:bg-[#15803D] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition disabled:bg-slate-200 disabled:text-[#9CA3AF] disabled:cursor-not-allowed"
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
