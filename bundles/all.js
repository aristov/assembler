export const components = [
    require('./../components/Button'),
    require('./../components/CheckBox'),
    require('./../components/Menu'),
    require('./../components/MenuButton'),
    require('./../components/RadioGroup'),
    require('./../components/ListBox'),
    require('./../components/SelectBox'),
    require('./../components/TextBox'),
    require('./../components/PasswordBox'),
    require('./../components/NumberBox'),
    require('./../components/SearchBox'),
    require('./../components/TimeBox'),
    require('./../components/DialogButton'),
    require('./../components/DatePicker'),
    require('./../components/DateBox'),
    require('./../components/TabList'),
    require('./../components/Tree'),
    require('./../components/Grid')
].map(module => module.default);

export const templates = [
    require('./../templates/link'),
    require('./../templates/button'),
    require('./../templates/checkbox'),
    require('./../templates/radiogroup'),
    require('./../templates/listbox'),
    require('./../templates/textbox'),
    require('./../templates/textarea'),
    require('./../templates/passwordbox'),
    require('./../templates/numberbox'),
    require('./../templates/searchbox'),
    require('./../templates/searchgroup'),
    require('./../templates/datepicker'),
    require('./../templates/datebox'),
    require('./../templates/timebox'),
    require('./../templates/selectbox'),
    require('./../templates/menu'),
    require('./../templates/menubutton'),
    require('./../templates/group'),
    require('./../templates/dialog'),
    require('./../templates/dialogbutton'),
    require('./../templates/tablist'),
    require('./../templates/spin'),
    require('./../templates/tree'),
    require('./../templates/grid')
].map(module => module.default);
