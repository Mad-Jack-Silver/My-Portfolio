import {
  SiPython, SiCplusplus, SiDotnet,
  SiScikitlearn, SiPytorch, SiPandas, SiNumpy, SiStreamlit,
  SiHtml5, SiCss, SiJavascript,
  SiGit, SiGithub, SiUnity, SiFirebase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import {
  TrendingUp, Tags, Boxes, Layers, Share2, Eye, MessageSquare,
  Database, Scan,
} from "lucide-react";

const p = { size: 14 };

export const skillIcons = {
  "Python": <SiPython {...p} />,
  "C++": <SiCplusplus {...p} />,
  "Java": <FaJava {...p} />,
  "C#": <SiDotnet {...p} />,

  "Regression": <TrendingUp {...p} />,
  "Classification": <Tags {...p} />,
  "Clustering": <Boxes {...p} />,
  "CNNs": <Layers {...p} />,
  "Transfer Learning (ResNet18)": <Share2 {...p} />,
  "Grad-CAM": <Eye {...p} />,
  "NLP (in progress)": <MessageSquare {...p} />,

  "Scikit-learn": <SiScikitlearn {...p} />,
  "PyTorch": <SiPytorch {...p} />,
  "Pandas": <SiPandas {...p} />,
  "NumPy": <SiNumpy {...p} />,
  "Streamlit": <SiStreamlit {...p} />,

  "HTML": <SiHtml5 {...p} />,
  "CSS": <SiCss {...p} />,
  "JavaScript": <SiJavascript {...p} />,

  "Git/GitHub": (
    <span className="inline-flex gap-1">
      <SiGit {...p} /><SiGithub {...p} />
    </span>
  ),
  "SQL": <Database {...p} />,
  "Unity (C#)": <SiUnity {...p} />,
  "ARCore": <Scan {...p} />,
  "Firebase": <SiFirebase {...p} />,
  "Excel": <PiMicrosoftExcelLogo {...p} />,
};
