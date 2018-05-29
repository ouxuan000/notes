CREATE OR REPLACE VIEW ACT_HQ_TEM_CATEGORY AS
(select '1' ID,
               '工作流类型' NAME,
               'bpmn' CATEGORY,
               '#' PARENTID,
               null DESCRIPTION,
               null PROC_DEF_KEY_,
               null ORDER_ID
          from dual
        union
        select t.appid ID,
               appname NAME,
               t.appid CATEGORY,
               'bpmn' PARENTID,
               null DESCRIPTION,
               null PROC_DEF_KEY_,
               t.appid ORDER_ID
          from fw_t_sysapp t
         where t.appid in ('pay','card','realpay','salary')
        union
        SELECT guid ID,
               t.code || '-' || NAME,
               guid CATEGORY,
               decode(appid, '0', 'bpmn', appid) PARENTID,
               NAME DESCRIPTION,
               'S'||guid PROC_DEF_KEY_,
               t.code ORDER_ID
          FROM p#fasp_t_pavoucher t
         where t.appid in ('pay','card','realpay','salary'));