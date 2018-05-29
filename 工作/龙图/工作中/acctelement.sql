  /* 查看对应 来源数据的核算字段 计划数据中的fromctrlid p#fasp_T_glctrl288000
     guid1 guid2 是俩条要比对数据的guid,guid1中与guid2数据不同，显示guid1的数据
     guid3 核算要素以该条数据的核算要素为准，通过guid3查到account从而查到核算字段
  */
  create or replace procedure acctelement(guid1     in varchar2,
                                          guid2     varchar2,
                                          tablename varchar2,
                                          guid3     varchar2) is
  dsql varchar2(1000);
  TYPE ref_cursor_type IS REF CURSOR;
  columncodes ref_cursor_type;
  columncode  varchar2(20);
begin

  -- 调用 下面的存储过程，拿到数据不同的字段拼接成的insql
  compare2data(guid1, guid2, tablename, dsql);

  dsql := 'select t2.columncode
   from p#fasp_t_glctrlrulesub t2,
        (select t.guid, t.province, t.year
           from p#fasp_t_glctrlrulemain t,
                (select t.account, t.province, t.year
                   from p#fasp_t_glctrl288000 t
                  where t.guid = '||guid3||') t1
          where t.account = t1.account
            and t.province = t1.province
            and t.year = t1.year) t3
  where t2.ruleguid = t3.guid
    and t2.province = t3.province
    and t2.year = t3.year
    and t2.columncode ' || dsql;

  dbms_output.put_line('核算字段数据不同: ' || dsql);

  open columncodes for dsql;
  loop
    fetch columncodes
      into columncode;
    exit when columncodes%notfound;
    dbms_output.put_line(columncode);
  end loop;

end acctelement;