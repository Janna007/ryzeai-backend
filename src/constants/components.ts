export const COMPONENT_SCHEMAS = {
  Button: {
    props: {
      variant: { 
        type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'",
        required: true,
        default: "'primary'"
      },
      size: { 
        type: "'sm' | 'md' | 'lg'",
        required: false,
        default: "'md'"
      },
      disabled: { 
        type: "boolean",
        required: false,
        default: "false"
      },
      onClick: { 
        type: "() => void",
        required: false
      },
      children: { 
        type: "ReactNode",
        required: true
      }
    },
    description: "Standard action button"
  },
  Card: {
    props: {
      title: { 
        type: "string",
        required: true
      },
      subtitle: { 
        type: "string",
        required: false
      },
      children: { 
        type: "ReactNode",
        required: true
      },
      footer: { 
        type: "ReactNode",
        required: false
      },
      variant: { 
        type: "'default' | 'outlined' | 'elevated'",
        required: false,
        default: "'default'"
      }
    },
    description: "Container for grouped content"
  },
  Input: {
    props: {
      type: { 
        type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url'",
        required: false,
        default: "'text'"
      },
      placeholder: { 
        type: "string",
        required: true
      },
      label: { 
        type: "string",
        required: true
      },
      value: { 
        type: "string | number",
        required: false
      },
      onChange: { 
        type: "(e) => void",
        required: false
      },
      disabled: { 
        type: "boolean",
        required: false
      },
      error: { 
        type: "string",
        required: false
      }
    },
    description: "Form input field"
  },
  Table: {
    props: {
      columns: { 
        type: "{ key: string, label: string }[]",
        required: true
      },
      data: { 
        type: "Record<string, any>[]",
        required: true
      },
      variant: { 
        type: "'default' | 'striped' | 'bordered'",
        required: false,
        default: "'default'"
      }
    },
    description: "Data table"
  },
  Modal: {
    props: {
      isOpen: { 
        type: "boolean",
        required: true
      },
      onClose: { 
        type: "() => void",
        required: true
      },
      title: { 
        type: "string",
        required: true
      },
      children: { 
        type: "ReactNode",
        required: true
      },
      size: { 
        type: "'sm' | 'md' | 'lg' | 'xl'",
        required: false,
        default: "'md'"
      }
    },
    description: "Overlay dialog"
  },
  Sidebar: {
    props: {
      items: { 
        type: "{ label: string, icon: string, href: string }[]",
        required: true
      },
      activeItem: { 
        type: "string",
        required: false
      },
      onItemClick: { 
        type: "(item) => void",
        required: false
      },
      collapsed: { 
        type: "boolean",
        required: false,
        default: "false"
      }
    },
    description: "Vertical navigation sidebar"
  },
  Navbar: {
    props: {
      title: { 
        type: "string",
        required: true  // ⚠️ THIS WAS THE ISSUE
      },
      items: { 
        type: "{ label: string, href: string }[]",
        required: true  // ⚠️ THIS WAS THE ISSUE
      },
      actions: { 
        type: "ReactNode",
        required: false
      }
    },
    description: "Top navigation bar"
  },
  Chart: {
    props: {
      type: { 
        type: "'line' | 'bar' | 'pie' | 'area'",
        required: true  // ⚠️ THIS WAS THE ISSUE
      },
      data: { 
        type: "any[]",
        required: true  // ⚠️ THIS WAS THE ISSUE
      },
      title: { 
        type: "string",
        required: true  // ⚠️ THIS WAS THE ISSUE
      },
      height: { 
        type: "number",
        required: false,
        default: "300"
      }
    },
    description: "Data visualization"
  },
  Grid: {
    props: {
      columns: { 
        type: "number",
        required: false,
        default: "12"
      },
      gap: { 
        type: "'none' | 'sm' | 'md' | 'lg'",
        required: false,
        default: "'md'"
      },
      children: { 
        type: "ReactNode",
        required: true
      },
      allowedChildren: ["Stack", "Card", "Sidebar"]   
    },
    description: "Grid layout container"
  },
  Container: {
    props: {
      size: { 
        type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
        required: false,
        default: "'lg'"
      },
      children: { 
        type: "ReactNode",
        required: true
      }
    },
    description: "Centered container"
  },
  Badge: {
    props: {
      variant: { 
        type: "'default' | 'success' | 'warning' | 'error' | 'info'",
        required: false,
        default: "'default'"
      },
      children: { 
        type: "ReactNode",
        required: true
      }
    },
    description: "Status indicator"
  },
  Text: {
    props: {
      variant: { 
        type: "'heading1' | 'heading2' | 'heading3' | 'body' | 'caption' | 'label'",
        required: true  // ⚠️ Make this required
      },
      weight: { 
        type: "'normal' | 'medium' | 'semibold' | 'bold'",
        required: false,
        default: "'normal'"
      },
      children: { 
        type: "ReactNode",
        required: true
      }
    },
    description: "Typography component"
  },
  Stack: {
    props: {
      gap: { 
        type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        required: false,
        default: "'md'"
      },
      children: { 
        type: "ReactNode",
        required: true
      }
    },
    description: "Vertical flexbox container"
  }
} as const;