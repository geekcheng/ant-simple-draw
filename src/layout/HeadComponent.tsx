import React, { memo } from 'react';
import style from './layout.module.scss';
import {
  DeleteOutlined,
  UndoOutlined,
  RedoOutlined,
  CopyOutlined,
  ScissorOutlined,
  SnippetsOutlined,
  PrinterOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { Tooltip, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { redo, undo } from '@/store/controller/editor/snapshot';
import { copy, cut, paste } from '@/store/controller/editor/copy';
import SvgComponent from '@/components/SvgIcon';
const Head = memo(function Head() {
  const dispatch = useDispatch();

  const handle = (flag: string) => {
    switch (flag) {
      case 'ClearScreen':
        console.log(`ClearScreen`);
        break;
      case 'Revoke':
        dispatch(undo());
        break;
      case 'Redo':
        dispatch(redo());
        break;
      case 'Copy':
        dispatch(copy());
        break;
      case 'Cut':
        dispatch(cut());
        break;
      case 'Paste':
        dispatch(paste(false));
        break;
      case 'Print':
        console.log(`Print`);
        break;
      default:
        break;
    }
  };
  return (
    <div className={style.header}>
      <h1 className={style.title}>
        <a href="/">
          <img src="http://blog.lgf196.top/ant-simple-pro-document/logon.png" alt="" />
          <span>DRAW</span>
        </a>
      </h1>
      <div className={style.option}>
        <Button type="primary" ghost icon={<DownloadOutlined />}>
          导出画布
        </Button>
        <Tooltip title="删除">
          <DeleteOutlined className={style.icon} />
        </Tooltip>
        <Tooltip title="撤销">
          <SvgComponent
            iconClass="undo"
            style={{ width: '19px', height: '19px', margin: '0 15px' }}
            fill="#2f54eb"
            onClick={() => handle('Revoke')}
          />
          {/* <UndoOutlined className={style.icon} onClick={() => handle('Revoke')} /> */}
        </Tooltip>
        <Tooltip title="恢复">
          <SvgComponent
            iconClass="redo"
            fill="#2f54eb"
            style={{ width: '19px', height: '19px', margin: '0 15px' }}
            onClick={() => handle('Redo')}
          />
          {/* <RedoOutlined className={style.icon} onClick={() => handle('Redo')} /> */}
        </Tooltip>
        <Tooltip title="复制">
          <CopyOutlined className={style.icon} onClick={() => handle('Copy')} />
        </Tooltip>
        <Tooltip title="剪切">
          <ScissorOutlined className={style.icon} onClick={() => handle('Cut')} />
        </Tooltip>
        <Tooltip title="粘贴">
          <SnippetsOutlined className={style.icon} onClick={() => handle('Paste')} />
        </Tooltip>
        <Tooltip title="打印">
          <PrinterOutlined className={style.icon} />
        </Tooltip>
      </div>
    </div>
  );
});

export default Head;
